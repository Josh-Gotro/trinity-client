import React from 'react';

function Item(props) {
    // console.log(props)
    return (
        <div className="item">
            {/* <span> {props.date} </span>  */}
            <span> {props.itemName} </span> <span> {`$${props.itemDetails.price}`}</span><span> {props.itemDetails.pack_size}</span>
        </div>
    );
}

export default Item;
