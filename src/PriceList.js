import React from 'react';
import Item from './Item';

function PriceList({plInfo}){
    const {items, item_details} = plInfo
    console.log(items, item_details)

    const plItem = () => {
        console.log("hi there")
        return items.map(item =>{
            return item_details.filter(itemD => item.id === itemD.id)
            .map(i => {
                console.log(i)
                return <Item key={i.id} itemDetails={i} itemName={item.name}/>
            })
        })
    }

    return (
        <div>
            item
            {plItem()}
            <Item />
           
        </div>
    );
}

export default PriceList;
