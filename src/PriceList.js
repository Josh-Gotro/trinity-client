import React from 'react';
import Item from './Item';

function PriceList({plInfo}){
    const {items, item_details, date} = plInfo
    // console.log(date)

    const plItem = () => {
        // console.log("hi there")
        if (items !== undefined) { 
        return items.map(item =>{
            return item_details.filter(itemD => item.id === itemD.id)
            .map(i => {
                // console.log(i)
                // console.log(item)
                return <Item key={i.id} date={date} itemDetails={i} itemName={item.name}/>
            })
        })
    }
    }

    return (
        <>
            <div className="colD">{date}</div>
            {plItem()}

           
        </>
    );
}

export default PriceList;
