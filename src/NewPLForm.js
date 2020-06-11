import React, { useState, useEffect } from 'react';
import ListItems from './ListItems'
import { currentVendors } from './services/Atom';
import { currentUser } from './services/Atom';
import { useRecoilValue } from 'recoil';
import { useForm } from "react-hook-form";


function NewPLForm(props) {
    const { register, handleSubmit, errors } = useForm();

    const [plid, setPlid] = useState("")
    const [showCreate, setCreate] = useState(true);
    const [showAddItem, setAddItem] = useState(false);
    const [newItems, setNewItems] = useState([]);

    let vendors = useRecoilValue(currentVendors)
    let crrntUser = useRecoilValue(currentUser)

    // useEffect(() => {
   
    // }, [])

    const vendorOptions = () => {
        // console.log(vendors)
        if (vendors.length > 0) {
            return vendors.filter(vendor => vendor.user_id === crrntUser.id)
                .map(vendor => <option key={vendor.id} value={vendor.id} > {vendor.name}</option>)
            }
    }

    const onSubmit = (data, r ) => {
        // console.log(data);

        fetch(`http://localhost:3001/price_lists`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user_id: crrntUser.id,
                vendor_id: data.vendor,
                date: data.date,
            })
        })
            .then(resp => resp.json())
            .then(dta => {
                localStorage.setItem("token", dta.jwt);
                setPlid(dta.id)
                console.log(plid)
                toggleCreate()
                toggleAddItem()
            })
        // r.target.reset();
    }

    const onItemSubmit = (data, r) => {
        // console.log(data)
        setNewItems(newItems => [...newItems, data])
        // setNewItems(data)
         r.target.reset();

    }

    const toggleCreate = () => {
        setCreate(prev => !prev)
    }

    const toggleAddItem = () => {
        setAddItem(prev => !prev)
    }

    const finishSequence = () => {
        alert(`Price List Created`)
        props.toggle()
    }

    const listItems = () => {
        return <ListItems items={newItems}/>
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <br></br>
                <h1>New Price List</h1>
                <br></br>
                <label>
                    <select ref={register({ required: true })} name="vendor" >
                        <option value="" > Select Vendor</option>
                        {vendorOptions()}
                    </select>
                    {errors.vendor && <p>Please select vendor. </p>}<br></br><br></br>
                    Date:
                    <input type="date" name="date" ref={register({required: true})} />
                    {errors.date && <p>Please select date. </p>}<br></br><br></br>

                </label>
                {showCreate ? <input type="submit" value="Create Price List" /> : null}<br></br><br></br>
            </form> 
            {listItems()}
            <form onSubmit={handleSubmit(onItemSubmit)}>
                {showAddItem ? <label>
                    Item Name:
                    <input type="text" name="name" ref={register} />
                    $
                    < input type = "number" step = '0.01' placeholder = '0.00' name = "price" ref = { register } />
                    per
                    < input type="text" name="size" ref={register} /> <br></br>

                </label> : null}
                {showAddItem ? <input type="submit" value="+ Item" /> : null}
            </form> 
                {showAddItem ? <button type="button" onClick={finishSequence} >finished</button> : null}

        </div>
    );
}

export default NewPLForm;


