import React, { useState } from 'react';
import ListItems from './ListItems'
import { currentUser, currentVendors, currentPriceLists } from './services/Atom';
import { useRecoilValue } from 'recoil';
import { useForm } from "react-hook-form";


function NewPLForm(props) {
    const { register, handleSubmit, errors, unregister } = useForm();

    const [plid, setPlid] = useState("")
    const [itemDeets, setItemDeets] = useState("")
    const [showCreate, setCreate] = useState(true);
    const [showAddItem, setAddItem] = useState(false);
    const [newItems, setNewItems] = useState([]);

    let vendors = useRecoilValue(currentVendors)
    let crrntUser = useRecoilValue(currentUser)
    let pricelists = useRecoilValue(currentPriceLists)

    // ###################################################


    // vendor dropdown
    const vendorOptions = () => {
        if (vendors.length > 0) {
            return vendors.filter(vendor => vendor.user_id === crrntUser.id)
                .map(vendor => <option key={vendor.id} value={vendor.name} > {vendor.name}</option>)
        }
    }
    // prev item dropdown
    const itemOptions = () => {
        if (pricelists.length > 0) {
            return pricelists.filter(plid => plid)
                .map(pl => {
                    return pl.items.map(item => {
                        // console.log(item)
                        return <option key={item.id} value={item.name} > {item.name}</option>
                    })
                })
        }
    }
    // pack size dropdown
    const sizeOptions = () => {
        if (pricelists.length > 0) {
            return pricelists.filter(plid => plid)
                .map(pl => {
                    return pl.item_details.map(item => {
                        // console.log(item)
                        return <option key={item.id} value={item.id} > {item.pack_size}</option>
                    })
                })
        }
    }

    // ###################################################

    // create new price list
    const onSubmit = (data, r) => {
        console.log(data);
        console.log(crrntUser.id)
        console.log(localStorage.getItem("token"))
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

    // ###################################################


    // create new item, user input
    const onItemSubmit = (data, r) => {
        // console.log(data)
        setNewItems(newItems => [...newItems, data]);
        console.log(newItems)
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
                    name: data.name1
                })
            })
                .then(resp => resp.json())
                .then(jsn => {
                    createItemDetail(jsn.id, data);

                    r.target.reset();
                })
        }
    }

    // create new item details from user input item 
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
                    price_list_id: plid,
                    item_id: itemId,
                    pack_size: data.size1,
                    price: data.price1
                })
            })
                .then(res => res.json())
                .then(json => {
                    setItemDeets(json)
                })
        }
    }

    // ###################################################


    // create new item from drop down
    const onPrevItemSubmit = (data, r) => {
        console.log(data)
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
                    createPrevItemDetail(jsn.id, data);

                    r.target.reset();
                })
        }
    }

    // create item detail from dropdown    
    const createPrevItemDetail = (itemId, data) => {
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
                    price_list_id: plid,
                    item_id: itemId,
                    pack_size: data.size,
                    price: data.price
                })
            })
                .then(res => res.json())
                .then(json => {
                    setItemDeets(json)
                    // console.log(itemDeets)
                })
        }
    }

    // ###################################################


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
        // console.log(newItems)
        return <ListItems items={newItems} />
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
                    <input type="date" name="date" ref={register({ required: true })} />
                    {errors.date && <p>Please select date. </p>}<br></br><br></br>

                </label>
                {showCreate ? <input type="submit" value="Create Price List" /> : null}<br></br><br></br>
            </form>

            {listItems()}

            <form onSubmit={handleSubmit(onItemSubmit)}>
                {showAddItem ? <label>
                    Item Name:
                    <input type="text" name="name1" ref={unregister} />
                    $
                    < input type="number" step='0.01' placeholder='0.00' name="price1" ref={unregister} />
                    per
                    < input type="text" name="size1" ref={unregister} /> <br></br>

                </label> : null}
                {showAddItem ? <input type="submit" value="> Item" /> : null}
            </form>

            <br></br> {showAddItem ? <button>or quick-select previously used items </button> : null}<br></br><br></br>

            <form onSubmit={handleSubmit(onPrevItemSubmit)}>
                {showAddItem ? <label>
                    Item Name:
                    <select ref={register} name="name" >
                        <option value="" > Select Item</option>
                        {itemOptions()}
                    </select>
                    $
                    < input type="number" step='0.01' placeholder='0.00' name="price" ref={register} />
                    per
                    <select ref={register} name="size" >
                        <option value="" > Select Pack Size</option>
                        {sizeOptions()}
                    </select><br></br>

                </label> : null}
                {showAddItem ? <input type="submit" value="+ Item" /> : null}
            </form><br></br>

            {showAddItem ? <button type="button" onClick={finishSequence} >finished</button> : null}

        </div>
    );
}

export default NewPLForm;