import React from 'react';
import Item from './Item';

function PriceList({plInfo}){
    const {items, item_details, date} = plInfo
    // console.log(date)

    const plItem = () => {
        // console.log("hi there")
        return items.map(item =>{
            return item_details.filter(itemD => item.id === itemD.id)
            .map(i => {
                // console.log(i)
                return <Item key={i.id} date={date} itemDetails={i} itemName={item.name}/>
            })
        })
    }

    return (
        <div>
            
            {plItem()}
            {/* <Item /> */}
           
        </div>
    );
}

export default PriceList;
