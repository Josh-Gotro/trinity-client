import React from 'react';

function Pl(props) {

    const doWhat = () => {
        // console.log(props)
    //    return null
        if (props.info.price_lists !== undefined) {
            // console.log(props.info.id)
            return props.info.price_lists.map(pl => {
              return   pl.vendor_id === props.info.id  ? <div onClick={() => showId(pl.vendor_id)} key={pl.id} id={pl.id}>{pl.date}</div> : null
  
            })
        } 
    }
    
    const showId = (id) => {
        console.log(id)
    }
    return (
        <div>
            {doWhat()}
        </div>
    );
}

export default Pl;
