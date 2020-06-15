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
                        return <>{plst.vendor.name} <Item key={Math.random()} itemName={pl.item_name} itemDetails={pl} /> </>
                    })

                })
        }
        return null
    }

    return (
        <div>

            {displayPL()}

        </div>
    );
}

export default Items;
