import React from 'react';

const VendorInfo = (props) => {

    const listReps = () => {
        // console.log(props)
        if (props.vendors !== undefined) {
            return props.vendors.map(vendor => {
                if (props.userInfo.id === vendor.user_id ) {
                return <>
                    <div className="ii"></div>
                    <div className="jj" >{vendor.name}</div>
                    <div className="kk">{vendor.rep}</div>
                    <div className="ll">{vendor.contact}</div>
                    <div className="ii"></div>
                    </>
                }
            })
        }
    }
    

    return (
        <div className="represent">
            {listReps()}
        </div>
    );
}

export default VendorInfo;
