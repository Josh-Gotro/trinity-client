import React from 'react';

const Vendor = (props) => {

    const showVendors = () => {
        if (props !== undefined) {
            return props.vendorInfo.vendor.name
        }
    }
    return (
        <div>
           {showVendors()}
        </div>
    );
}

export default Vendor;
