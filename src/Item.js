import React from 'react';

function Item(props) {

    const packSize = () => {
        if (props.itemDetails.pack_size){
            return props.itemDetails.pack_size
        } else {
            return props.itemDetails.size
        }
        
    }

    return (
        <>
            <div id="aa"> {props.itemName} </div> 
            <div id="dd"> {`$${props.itemDetails.price}`}</div>
            <div id="ff"> {packSize()}</div>
        </>
    );
}

export default Item;
