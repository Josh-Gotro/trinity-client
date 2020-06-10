import React, { useState, useEffect } from 'react';
import Vendor from './Vendor'
import NewVendorForm from './NewVendorForm';
import NewPLForm from './NewPLForm';
import { currentVendors } from './services/Atom';
import { currentPriceLists } from './services/Atom';
import { currentUser } from './services/Atom';
import { useRecoilState, useRecoilValue } from 'recoil';


function VendorsList() {
    const [vendors, setVendors] = useRecoilState(currentVendors);
    const [priceLists, setPriceLists] = useRecoilState(currentPriceLists);
    const [showVendorForm, setShowVendorForm] = useState(false);
    const [showPLForm, setShowPLForm] = useState(false);
    let current = useRecoilValue(currentUser);
    

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
        fetch("http://localhost:3001/vendors", {
            headers: {
                Authorization: `Bearer ${token}`
            } 
        })
        .then(r => r.json())
        .then(vend => setVendors(vend) )
        }
    }, [])

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            fetch("http://localhost:3001/price_lists", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(r => r.json())
                .then(plists => setPriceLists(plists))
        }
    }, [])

    const myVendors = () => {
        if (priceLists.length > 0) { 
        return priceLists.map(pl => {
            if (pl.user_id === current.id){
                return <Vendor key={pl.id} vendorInfo={pl}/>
            }
        });
        }
        // console.log(vendors)
        // console.log(priceLists.length)
        // console.log(current.id)
    }

    const toggleVendorForm = () => {
        setShowVendorForm(prev => !prev)
    }
    const togglePLForm = () => {
        setShowPLForm(prev => !prev)
    }
    
    return (
        <div>
            <div>
                {myVendors()} 
                {<button onClick={toggleVendorForm}>Add Vendor</button>}<br></br>
                {<button onClick={togglePLForm}>New Price List</button>}
            </div>
            <div>
                {showVendorForm ? <NewVendorForm  userInfo={current} /> : null}
                
            </div>
            {showPLForm ? <NewPLForm userInfo={current} /> : null}
        </div>
    );
    
}




export default VendorsList;
