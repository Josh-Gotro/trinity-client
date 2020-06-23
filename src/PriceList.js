import React from 'react';
import Item from './Item';


function PriceList(props){
    // console.log(props)

    const convertDetails = () => {
        if (props.plInfo.name !== undefined){
            return {name: props.plInfo.name, pack_size: props.plInfo.size, price: props.plInfo.price}
        }
    }
    
    // const {items, item_details, date} = plInfo
    // console.log(date)

    const plItem = () => {
        // console.log("hi there")
        if (props.plInfo.items !== undefined) { 
        return props.plInfo.items.map(item =>{
            return props.plInfo.item_details.filter(itemD => item.id === itemD.id)
            .map(i => {
                return <Item key={i.id} date={props.plInfo.date} itemDetails={i} itemName={item.name}/>
            })
        })
    } else {
            // return <Item key={props.plInfo.id} date={props.plInfo.date} itemDetails={convertDetails()} itemName={props.plInfo.name} />
            console.log(props)
    }
    }

    return (
        <>
            {/* <div className="colD">{props.plInfo.vendor.name}</div> */}
            <div className="colD">{console.log(props)}</div>

            <div className="colD">{props.plInfo.date}</div>
            {plItem()}
        </>
    );
}

export default PriceList;
