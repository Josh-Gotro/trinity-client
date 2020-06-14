import React from 'react';

function Pl(props) {

    const listDates = () => {

        if (props.info.price_lists !== undefined) {
            // console.log(props.info.id)
            return props.info.price_lists.map(pl => {
            //   return   pl.vendor_id === props.info.id  ? 
              return <div key={pl.id} id={pl.id}>{pl.date}</div> 
            //   : null
            })
        } 
    }
    
    return (
        <div>
            {listDates()}
        </div>
    );
}

export default Pl;
