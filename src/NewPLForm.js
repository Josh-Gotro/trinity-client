import React, { useState } from 'react';
import ListItems from './ListItems'
import { currentVendors, currentUser } from './services/Atom';
import { useRecoilValue } from 'recoil';
import { useForm } from "react-hook-form";


function NewPLForm(props) {
    const { register, handleSubmit, errors } = useForm();

    // const [currentPL, setPl] = useState({})
    const [plid, setPlid] = useState("")
    const [itemDetails, setItemDetails] = useState("")
    const [showCreate, setCreate] = useState(true);
    const [showAddItem, setAddItem] = useState(false);
    const [newItems, setNewItems] = useState([]);
 


    let vendors = useRecoilValue(currentVendors)
    let crrntUser = useRecoilValue(currentUser)

    const vendorOptions = () => {
        if (vendors.length > 0) {
            return vendors.filter(vendor => vendor.user_id === crrntUser.id)
                .map(vendor => <option key={vendor.id} value={vendor.id} > {vendor.name}</option>)
        }
    }

    const onSubmit = (data, r) => {
        // console.log(data);
        const token = localStorage.getItem("token")

        if (token) {
            fetch(`http://localhost:3001/price_lists`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
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
                    console.log(dta)
                    setPlid(dta.id)
                    toggleCreate()
                    toggleAddItem()

                })
        }

    }

    const onItemSubmit = (data, r) => {
        // console.log(data)
        setNewItems(newItems => [...newItems, data]);
        const token = localStorage.getItem("token")

        if (token) {
            fetch(`http://localhost:3001/items`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: data.name
                })
            })
                .then(resp => resp.json())
                .then(jsn => {
                    createItemDetail(jsn.id, data);
                    r.target.reset();
                })
        }
    }

    const createItemDetail = (itemId, data) => {
        // console.log(data)
        const token = localStorage.getItem("token")

        if (token) {
            fetch(`http://localhost:3001/item_details`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    item_name: data.name,
                    price_list_id: plid,
                    item_id: itemId,
                    pack_size: data.size,
                    price: data.price
                })
            })
                .then(res => res.json())
                .then(json => {
                    setItemDetails(json)
                    console.log(itemDetails)
                })
        }
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
        props.fetchV()
    }

    const listItems = () => {
        return <ListItems items={newItems} />
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <br></br>
                <h1>New Price List</h1>
                <br></br>
                <label>
                    <select className="select" ref={register({ required: true })} name="vendor" >
                        <option value="" > Select Vendor</option>
                        {vendorOptions()}
                    </select>
                    {errors.vendor && <p>Please select vendor. </p>}<br></br><br></br>
                    Date:
                    <input type="date" name="date" ref={register({ required: true })} />
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
                    < input type="number" step='0.01' placeholder='0.00' name="price" ref={register} />
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