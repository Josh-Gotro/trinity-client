import React, { useState } from 'react';
import { currentUser } from './services/Atom';
import { useRecoilValue } from 'recoil';
import { Redirect } from 'react-router-dom'; 
function NewVendorForm(props) {
    const [companyName, setCompanyName] = useState("");
    const [description, setDescription] = useState("");
    const [rep, setRep] = useState("");
    const [contactInfo, setContactInfo] = useState("");
    let crrntUser = useRecoilValue(currentUser)

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Submitting New Vendor ${companyName}`)
        logit()
        fetch(`http://localhost:3001/vendors`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user_id: crrntUser.id,
                name: companyName,
                description: description, 
                rep: rep,
                contact: contactInfo
            })
        })
            .then(resp => resp.json())
            .then(data => {
                localStorage.setItem("token", data.jwt);
                // window.location.reload(false);
            })
    }

 

    const logit = () => {
        console.log(crrntUser.id)
        console.log(props)
        console.log(companyName)
        console.log(description)
        console.log(rep)
        console.log(contactInfo)
    }

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <br></br>
                <h1>New Vendor</h1>
                <br></br>
                <label>
                    Company Name:
                    <input type="text" name="name" onChange={e => setCompanyName(e.target.value)}/><br></br>
                    Description:
                    <input type="text" name="name" onChange={e => setDescription(e.target.value)}/><br></br>
                    Rep Name:
                    <input type="text" name="name" onChange={e => setRep(e.target.value)}/><br></br>
                    Contact Info:
                    <input type="text" name="name" onChange={e => setContactInfo(e.target.value)}/><br></br>
                </label>
                <input type="submit" value="Save Vendor" />
            </form>
            
        </div>
    );
}

export default NewVendorForm;
