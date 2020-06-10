import React from 'react';
import { currentUser } from './services/Atom';
import { useRecoilValue } from 'recoil';

function Vendor(props) {
    let crrntUser = useRecoilValue(currentUser)

    const showMyVendors = () => {
        if (props !== undefined) {
            // console.log(props.vendorInfo)
            // console.log(props.toggleState)
            if (props.vendorInfo.price_lists.user_id === crrntUser.id) {
                return <div onClick={() => props.vendorClick(props.vendorInfo)}>{props.vendorInfo.name}</div>
                // return <div onClick={ props.toggle}>{props.vendorInfo.name}</div>

            }
        }
       
    }

    


    return (
        <>
            {showMyVendors()}
        </>
    );
}

export default Vendor;
