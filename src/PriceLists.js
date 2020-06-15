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
                    return <PriceList key={pl.id} plInfo={pl} />
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
export default PriceLists;
