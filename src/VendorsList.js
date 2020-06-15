import React, { useState, useEffect } from 'react';
import Vendor from './Vendor'
import PriceListCompare from './PriceListCompare'
import NewVendorForm from './NewVendorForm';
import NewPLForm from './NewPLForm';
import { currentUser, selectedVendor, currentPriceLists, currentVendors } from './services/Atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useHistory } from 'react-router-dom';


function VendorsList() {
    const [vendors, setVendors] = useRecoilState(currentVendors);
    const [priceLists, setPriceLists] = useRecoilState(currentPriceLists);
    const [curVend, setCurVend] = useRecoilState(selectedVendor);

    const [showVendorForm, setShowVendorForm] = useState(false);
    const [showPLForm, setShowPLForm] = useState(false);
    const [showPL, setShowPL] = useState(false);

    let crrntUser = useRecoilValue(currentUser);

    let history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            fetch("http://localhost:3001/vendors", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(r => r.json())
                .then(vend => setVendors(vend))
        }
    }, [setVendors])

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
    }, [setPriceLists])

    const myVendors = () => {
        if (vendors.length > 0 && crrntUser !== undefined) {
             return vendors.filter(vendor => vendor.user_id === crrntUser.id)
                 .map(vendor => <><div className="Side"><Vendor key={vendor.id} vendorPL={curVend} vendorClick={handleVendorClick} vendorInfo={vendor} /></div></>)
         } 
    }

    const handleVendorClick = (e) => {
        setCurVend(e)
        togglePL()
    }

    const toggleVendorForm = () => {
// -----------> added the !== statement in order to catch blank logins 
        if (crrntUser !== undefined && crrntUser.id) {
            return setShowVendorForm(prev => !prev)
        } else {
            alert("Please login or sign up")
            return history.push('/')
        };
    }
    const togglePLForm = () => {
// -----------> added the !== statement in order to catch blank logins 
        if (crrntUser !== undefined && crrntUser.id) {
            return setShowPLForm(prev => !prev)
        } else {
            history.push('/')
            return alert("Please login or sign up")
        };
    }
    const togglePL = () => {
        setShowPL(prev => !prev)
        console.log(priceLists)
    }

    return (
        <div>
            <div className="card">
                {myVendors()}

                {<button className="NewForm" onClick={toggleVendorForm}>Add Vendor</button>}<br></br>
                {<button className="NewForm" onClick={togglePLForm}>New Price List</button>}
            </div>
            <div>
                {showVendorForm ? <NewVendorForm key={Math.random()} toggle={toggleVendorForm} userInfo={crrntUser} /> : null}
            </div>
            <div>
                {showPLForm ? <NewPLForm key={Math.random()} toggle={togglePLForm} userInfo={crrntUser} /> : null}
            </div>
            <div className="display_card ">
                {showPL ? <PriceListCompare  key={Math.random()} currentVendor={curVend} userInfo={crrntUser} /> : null}
            </div>
        </div>
    );

}




export default VendorsList;
