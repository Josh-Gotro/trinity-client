import React from 'react';

function Item(props) {
    return (
        <>
            <div className="colI"> {props.itemName} </div> 
            <div className="colI"> {`$${props.itemDetails.price}`}</div>
            <div className="colI"> {props.itemDetails.pack_size}</div>
        </>
    );
}

export default Item;
