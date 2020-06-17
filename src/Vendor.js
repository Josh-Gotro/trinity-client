import React from 'react';
import Pl from './Pl'

function Vendor(props) {

    const showMyVendors = () => {
        if (props !== undefined) {
            return <div><div className="List" onClick={() => props.vendorClick(props.vendorInfo)}>{props.vendorInfo.name}</div> <Pl info={props.vendorInfo}/> </div>
        };
    }

    return (
        <div>
            {showMyVendors()}
        </div>
    );
}

export default Vendor;
