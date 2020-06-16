import React from 'react';

function Pl(props) {

    const listDates = () => {

        if (props.info.price_lists !== undefined) {
            return props.info.price_lists.map(pl => {
                return <div onClick={() => holler(pl)} className="ListDates" key={pl.id} id={pl.id}>{pl.date}</div> 

            })
        } 
    }

    const holler = (pl) => {
        console.log(pl)
        console.log(props)
    }    
 

    return (
        <div >
            {listDates()}
        </div>
    );
}

export default Pl;
