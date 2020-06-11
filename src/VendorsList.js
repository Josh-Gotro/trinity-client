import React, { useState, useEffect } from 'react';
import Vendor from './Vendor'
import PriceListCompare from './PriceListCompare'
import NewVendorForm from './NewVendorForm';
import NewPLForm from './NewPLForm';
import { currentVendors } from './services/Atom';
import { currentPriceLists } from './services/Atom';
import { currentUser } from './services/Atom';
import { selectedVendor } from './services/Atom';
import { useRecoilState, useRecoilValue } from 'recoil';


function VendorsList() {
    const [vendors, setVendors] = useRecoilState(currentVendors);
    const [priceLists, setPriceLists] = useRecoilState(currentPriceLists);
    const [curVend, setCurVend] = useRecoilState(selectedVendor);

    const [showVendorForm, setShowVendorForm] = useState(false);
    const [showPLForm, setShowPLForm] = useState(false);
    const [showPL, setShowPL] = useState(false);

    let crrntUser = useRecoilValue(currentUser);



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
        // console.log(vendors)
         if (vendors.length > 0) {
             return vendors.filter(vendor => vendor.user_id === crrntUser.id)
                 .map(vendor => <Vendor key={vendor.id} vendorClick={handleVendorClick} vendorInfo={vendor} />)
         }

        // if (priceLists.length > 0) {
        //     return priceLists.filter(pl => pl.user_id === crrntUser.id)
        //         .map(pl => <Vendor key={pl.id} vendorClick={handleVendorClick} vendorInfo={pl} />)
        // };
    }
    // console.log(vendors)
    // console.log(priceLists.length)
    // console.log(current.id)


    const handleVendorClick = (e) => {
        // console.log(crrntUser)
        setCurVend(e)
        // console.log(curVend)
        togglePL()
        // selectedVendor(e)
    }



    const toggleVendorForm = () => {
        setShowVendorForm(prev => !prev)
    }
    const togglePLForm = () => {
        setShowPLForm(prev => !prev)
    }
    const togglePL = () => {
        setShowPL(prev => !prev)
    }

    return (
        <div>
            <div>
                {/* {console.log(crrntUser)} */}
                {myVendors()}
            </div>
            <div>
                {<button onClick={toggleVendorForm}>Add Vendor</button>}<br></br>
                {<button onClick={togglePLForm}>New Price List</button>}
            </div>
            <div>
                {showVendorForm ? <NewVendorForm toggle={toggleVendorForm} userInfo={crrntUser} /> : null}
            </div>
            <div>
                {showPLForm ? <NewPLForm userInfo={crrntUser} /> : null}
            </div>
            <div>
                {showPL ? <PriceListCompare currentVendor={curVend} userInfo={crrntUser} /> : null}
            </div>
        </div>
    );

}




export default VendorsList;
