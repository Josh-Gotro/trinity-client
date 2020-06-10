import React from 'react';
import { currentUser } from './services/Atom';
import { useRecoilValue } from 'recoil';

function PriceListCompare(props){
    let crrntUser = useRecoilValue(currentUser)

    console.log(props.currentVendor)
    console.log(crrntUser)
    return (
        <div>
            hoy howdy
        </div>
    );
}

export default PriceListCompare;
