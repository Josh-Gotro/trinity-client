import React from 'react';

function ItemForPage(props) {

    const packSize = () => {
        console.log(props)
        // if (props.itemDetails.pack_size) {
        //     return props.itemDetails.pack_size
        // } else {
        //     return props.itemDetails.size
        // }

    }

    return (
        <>
            {/* <div id="aaaa"> {props.itemName} </div>
            <div id="ssss"> {props.vendorName} </div>
            <div id="dddd"> {`$${props.itemDetails.price}`}</div> */}
            <div id="ffff"> {packSize()}</div>
        </>
    );
}

export default ItemForPage;
