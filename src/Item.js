import React from 'react';

function Item(props) {
    return (
        <>
            <span id="c5"> {props.itemName} </span> 
            <span id="c6"> {`$${props.itemDetails.price}`}</span>
            <span id="c7"> {props.itemDetails.pack_size}</span>
        </>
    );
}

export default Item;
