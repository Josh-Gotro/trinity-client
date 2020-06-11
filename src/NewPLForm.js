import React, { useState } from 'react';
import { currentVendors } from './services/Atom';
// import { currentPriceLists } from './services/Atom';
import { currentUser } from './services/Atom';
import { useRecoilValue } from 'recoil';
import { useForm } from "react-hook-form";


function NewPLForm() {
    const { register, handleSubmit, errors } = useForm();

    let vendors = useRecoilValue(currentVendors)
    let crrntUser = useRecoilValue(currentUser)

    const vendorOptions = () => {
        // console.log(vendors)
        if (vendors.length > 0) {
            return vendors.filter(vendor => vendor.user_id === crrntUser.id)
                .map(vendor => <option key={vendor.id} value={vendor.id} > {vendor.name}</option>)
            }
    }

    const onSubmit = (e, r ) => {
        // e.preventDefault()
        alert(`Price List Created`)
        console.log(e);
        

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
        r.target.reset()
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

                    Item Name:
                    <input type="text" name="name1" ref={register} />
                    $
                    <input type="number" name="price1" ref={register} />
                    per
                    <input type="text" name="size1" ref={register} /><br></br>

                    Item Name:
                    <input type="text" name="name2" ref={register}  />
                    $
                    <input type="number" name="price2" ref={register} />
                    per
                    <input type="text" name="size2" ref={register} /><br></br>

                    Item Name:
                    <input type="text" name="name3" ref={register} />
                    $
                    <input type="number" name="price3" ref={register}  />
                    per
                    <input type="text" name="size3" ref={register} /><br></br>

                    Item Name:
                    <input type="text" name="name4" ref={register}  />
                    $
                    <input type="number" name="price4" ref={register}  />
                    per
                    <input type="text" name="size4" ref={register} /><br></br>

                </label>
                <input type="submit" value="Save Price List" />
            </form>

        </div>
    );
}

export default NewPLForm;
