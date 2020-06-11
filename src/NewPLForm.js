import React, { useState } from 'react';
import { currentVendors } from './services/Atom';
// import { currentPriceLists } from './services/Atom';
import { currentUser } from './services/Atom';
import { useRecoilValue } from 'recoil';


function NewPLForm() {
    const [vendorSelect, setVendorSelect] = useState("");
    const [dateSelect, setDateSelect] = useState("");

    let vendors = useRecoilValue(currentVendors)
    let crrntUser = useRecoilValue(currentUser)

    const vendorOptions = () => {
        // console.log(vendors)
        if (vendors.length > 0) {
            return vendors.filter(vendor => vendor.user_id === crrntUser.id)
                .map(vendor => <option key={vendor.id} name="vendorSelect" value={vendor.id} > {vendor.name}</option>)
            }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Price List Created`)
        // fetch(`http://localhost:3001/vendors`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify({
        //         user_id: crrntUser.id,
        //         name: companyName,
        //         description: description,
        //         rep: rep,
        //         contact: contactInfo
        //     })
        // })
        //     .then(resp => resp.json())
        //     .then(data => {
        //         localStorage.setItem("token", data.jwt);
        //         setVendors(prev => [...prev, data]);
        //     })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <br></br>
                <h1>New Price List</h1>
                <br></br>
                <label>
                    Select Vendor
                    <select onChange={e => setVendorSelect(e.target.value)}>
                        {vendorOptions()}
                    </select><br></br><br></br>
                    Date:
                    <input type="date" name="dateSelect" onChange={e => setDateSelect(e.target.value)}  /><br></br><br></br>

                    Item Name:
                    <input type="text" name="name" />
                    $
                    <input type="number" name="name" />
                    per
                    <input type="text" name="name" /><br></br>

                    Item Name:
                    <input type="text" name="name" />
                    $
                    <input type="number" name="name" />
                    per
                    <input type="text" name="name" /><br></br>

                    Item Name:
                    <input type="text" name="name" />
                    $
                    <input type="number" name="name" />
                    per
                    <input type="text" name="name" /><br></br>

                    Item Name:
                    <input type="text" name="name" />
                    $
                    <input type="number" name="name" />
                    per
                    <input type="text" name="name" /><br></br>

                </label>
                <input type="submit" value="Save Price List" />
            </form>

        </div>
    );
}

export default NewPLForm;
