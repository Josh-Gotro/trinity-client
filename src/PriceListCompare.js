import React from 'react';
import { currentPriceLists } from './services/Atom';
import { useRecoilValue } from 'recoil';
import PriceList from './PriceList';

function PriceListCompare(props){
    let cpl = useRecoilValue(currentPriceLists)
    let usrId = props.userInfo.id
    let vndrId = props.currentVendor.vendor_id

// console.log(props)
// console.log(usrId)
// console.log(vndrId)

const displayPL = () => {
    return cpl.filter(pl => pl.user_id === usrId && pl.vendor_id === vndrId)
    .map(pl => {
        // console.log(pl)
        return <PriceList  key={pl.id} plInfo={pl}/>
    })
}


    return (
        <div>
            pricelist
            {displayPL()}
        </div>
    );
}

export default PriceListCompare;