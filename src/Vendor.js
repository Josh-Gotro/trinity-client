import React from 'react';
import Pl from './Pl'

function Vendor(props) {

    const showMyVendors = () => {
        if (props !== undefined) {
            return <><div onClick={() => props.vendorClick(props.vendorInfo)}>{props.vendorInfo.name}</div> <Pl info={props.vendorInfo}/> </>
        }
    }

    return (
        <>
            {showMyVendors()}
        </>
    );
}

export default Vendor;
