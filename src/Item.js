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
        <div className="colPLI">
            <div className="aa"> {props.itemName} </div> 
            <div className="dd"> {`$${props.itemDetails.price}`}</div>
            <div className="ff"> {packSize()}</div>
        </div>
    );
}

export default Item;
