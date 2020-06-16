import React from 'react';
import { currentUser, currentPriceLists } from './services/Atom';
import { useRecoilValue } from 'recoil';
import Item from './Item';



const Items = () => {
    let usr = useRecoilValue(currentUser)
    let cpl = useRecoilValue(currentPriceLists)

    const displayPL = () => {
        if (cpl !== undefined && usr.id !== undefined) {
            return cpl.filter(pl => pl.user_id === usr.id)
                .map(plst => { 
                    return plst.item_details.map(pl => { 
                        return <div className="display_card_item">{plst.vendor.name} <Item key={Math.random()} itemName={pl.item_name} itemDetails={pl} /> </div>
                    })

                })
        }
        return null
    }

    return (
        <div className="Items_container">

            {displayPL()}

        </div>
    );
}

export default Items;
