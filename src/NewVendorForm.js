import React from 'react';
import { currentUser } from './services/Atom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { currentVendors } from './services/Atom';
import { useForm } from "react-hook-form";


function NewVendorForm(props) {
    const [vendors, setVendors] = useRecoilState(currentVendors);
    let crrntUser = useRecoilValue(currentUser)

    const { register, handleSubmit, errors } = useForm();


    const onSubmit = (data, r) => {
        alert(`Submitting New Vendor ${data.name}`)
        console.log(data)
        const token = localStorage.getItem("token")

        if (token) {
            fetch(`http://localhost:3001/vendors`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    user_id: crrntUser.id,
                    name: data.name,
                    description: data.description, 
                    rep: data.rep,
                    contact: data.contact
                })
            })
            .then(resp => resp.json())
            .then(data => {
                    setVendors(prev => [...prev, data]);
            })
            props.toggle()
            r.target.reset();
        }
    }



    return (
        <div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <br></br>
                <h1>New Vendor</h1>
                <br></br>
                <label>
                    Company Name:
                    <input type="text" name="name" ref={register({ required: true })}/> 
                    {errors.name && <p>Please enter the name of the vendor. </p>}<br></br>
                    Description:
                    <input type="text" name="description" ref={register}/><br></br>
                    Rep Name:
                    <input type="text" name="rep" ref={register({ required: true })}/>
                    {errors.rep && <p>Enter the name of the main contact for this vendor. </p>}<br></br>
                    Contact Info:
                    <input type="text" name="contact" ref={register({ required: true })}/>
                    {errors.contact && <p>Please enter contact info for this vendor rep. </p>}<br></br> 
                </label>
            
                <input type="submit" value="Save Vendor" />
                
            </form>
            
        </div>
    );
}

export default NewVendorForm;
