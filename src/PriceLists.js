import React from 'react';
import { currentUser, currentPriceLists } from './services/Atom';
import { useRecoilValue } from 'recoil';
import PriceList from './PriceList';



const PriceLists = () => {
    let usr = useRecoilValue(currentUser)
    let cpl = useRecoilValue(currentPriceLists)

    // template filter  
    const displayPL = () => {
        // console.log(cpl)
        if (cpl !== undefined && usr.id !== undefined) {
            return cpl.filter(pl => pl.user_id === usr.id)
                .map(pl => {
                    // console.log(pl)
                    return <div className="display_pl"><PriceList key={pl.id} plInfo={pl} /></div>
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
export default PriceLists;
