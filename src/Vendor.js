import React from 'react';

function Vendor(props) {

    const showMyVendors = () => {
        if (props !== undefined) {
            return <div onClick={() => props.vendorClick(props.vendorInfo)}>{props.vendorInfo.name}</div> 
        }
    }

    return (
        <>
            {showMyVendors()}
        </>
    );
}

export default Vendor;
