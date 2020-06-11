import React, { useState } from 'react';
import { currentVendors } from './services/Atom';
// import { currentPriceLists } from './services/Atom';
import { currentUser } from './services/Atom';
import { useRecoilValue } from 'recoil';
import { useForm } from "react-hook-form";


function NewPLForm(props) {
    const { register, handleSubmit, errors } = useForm();

    const [plid, setPlid] = useState("")
    const [showCreate, setCreate] = useState(true);
    const [showAddItem, setAddItem] = useState(false);

    let vendors = useRecoilValue(currentVendors)
    let crrntUser = useRecoilValue(currentUser)

    const vendorOptions = () => {
        // console.log(vendors)
        if (vendors.length > 0) {
            return vendors.filter(vendor => vendor.user_id === crrntUser.id)
                .map(vendor => <option key={vendor.id} value={vendor.id} > {vendor.name}</option>)
            }
    }

    const onSubmit = (data, r ) => {
        alert(`Price List Created`)
        console.log(data);

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
        console.log(data)
    }

    const toggleCreate = () => {
        setCreate(prev => !prev)
    }

    const toggleAddItem = () => {
        setAddItem(prev => !prev)
    }

    const finishSequence = () => {
        props.toggle()
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

            <form onSubmit={handleSubmit(onItemSubmit)}>
                {showAddItem ? <label>
                    Item Name:
                    <input type="text" name="name1" ref={register} />
                    $
                    < input type = "number" step = '0.01' placeholder = '0.00' name = "price1" ref = { register } />
                    per
                    < input type="text" name="size1" ref={register} /> <br></br>

                </label> : null}
                {showAddItem ? <input type="submit" value="Add Item" /> : null}
            </form> 
                {showAddItem ? <button type="button" onClick={finishSequence} >finished</button> : null}

        </div>
    );
}

export default NewPLForm;


