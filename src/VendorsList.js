import React, { useState, useEffect } from 'react';
import Vendor from './Vendor'
import PriceListCompare from './PriceListCompare'
import NewVendorForm from './NewVendorForm';
import NewPLForm from './NewPLForm';
import { currentUser, selectedVendor, currentPriceLists, currentVendors } from './services/Atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useHistory } from 'react-router-dom';
import './App.css';


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
        fetchVendors()
    }, [setVendors])

    const fetchVendors = () => {
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
    }


    useEffect(() => {
        fetchPL()
    }, [setPriceLists])

    const fetchPL = () => {
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
    }

    const myVendors = () => {
        if (vendors.length > 0 && crrntUser !== undefined) {
             return vendors.filter(vendor => vendor.user_id === crrntUser.id)
                 .map(vendor => <><div ><Vendor key={vendor.id} vendorPL={curVend} vendorClick={handleVendorClick} vendorInfo={vendor} /></div></>)
         } 
    }

    const handleVendorClick = (e) => {
        console.log(e)
        if (showPL === true && curVend.id === e.id){ 
            setCurVend(e)
            setShowPL(prev => !prev)
        } else {
            setCurVend(e)
            togglePL()
        }
    }

    const toggleVendorForm = () => {
// -----------> added the !== statement in order to catch blank logins 
        if (crrntUser !== undefined && crrntUser.id) {
            setShowPL(false)
            setShowPLForm(false)
            setShowVendorForm(prev => !prev)
        } else {
            alert("Please login or sign up")
            return history.push('/')
        };
    }
    const togglePLForm = () => {
// -----------> added the !== statement in order to catch blank logins 
        if (crrntUser !== undefined && crrntUser.id) {
            setShowPLForm(prev => !prev)
            setShowVendorForm(false)
            setShowPL(false)
        } else {
            history.push('/')
            return alert("Please login or sign up")
        };
    }
    const togglePL = () => {
        setShowPL(false)
        setShowPLForm(false)
        setShowVendorForm(false)
        setShowPL(prev => !prev)
        console.log(priceLists)
    }

    return (
        <div className="VendorsGrid">
            <div className="Side">
                {myVendors()}
                {<button className="BasicButton" onClick={toggleVendorForm}>Add Vendor</button>}<br></br>
                {<button className="BasicButton" onClick={togglePLForm}>New Price List</button>}<br></br>
            </div>
            <div className={showVendorForm ? "display_card " : "hidden"}>
                {showVendorForm ? <NewVendorForm key={Math.random()} toggle={toggleVendorForm} userInfo={crrntUser} /> : null}
            </div>
            <div className={showPLForm ? "display_card " : "hidden"}>
                {showPLForm ? <NewPLForm key={Math.random()} toggle={togglePLForm} userInfo={crrntUser} fetchPL={fetchPL} fetchV={fetchVendors}/> : null}
            </div>
            <div className={showPL ? "display_card " : "hidden"}>
                {showPL ? <PriceListCompare  key={Math.random()} currentVendor={curVend} userInfo={crrntUser} /> : null}
            </div>
        </div>
    );

}




export default VendorsList;
