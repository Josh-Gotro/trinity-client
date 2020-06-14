import React, { useState, } from 'react';
import { currentPriceLists } from './services/Atom';
import { useRecoilValue } from 'recoil';
import PriceList from './PriceList';

function PriceListCompare(props) {
    let cpl = useRecoilValue(currentPriceLists)
    const [vendorUserPricelists, setVendorUserPricelists] = useState([]);
    const [mostRecent, setMostRecent] = useState("");
    const [compare, setCompare] = useState("");
    let usrId = props.userInfo.id
    let vndrId = props.currentVendor.id
    let date = "0000-00-00"
    let newestPL = {}



    // console.log(props)
    // console.log(usrId)
    // console.log(vndrId)

    const displayPL = () => {
        // console.log(cpl)
        // console.log(usrId)
        // console.log(props.currentVendor)
        if (cpl !== undefined) {
            return cpl.filter(pl => pl.user_id === usrId && pl.vendor_id === vndrId)
                .map(pl => {
                    // console.log(pl)
                    return <PriceList key={pl.id} plInfo={pl} />
                })
        }
        // return null
    }

    const displayMostRecent = () => {
        findMostRecent();
        return <PriceList key={newestPL.id} plInfo={newestPL} />
        // console.log(cpl)
        // console.log(usrId)
        // console.log(props.currentVendor)
        // if (cpl !== undefined) {
        //     return cpl.filter(pl => pl.user_id === usrId && pl.vendor_id === vndrId)
        //         .map(pl => {
        //             // console.log(pl)
        //             return <PriceList key={pl.id} plInfo={pl} />
        //         })
        // }
        // return null
    }

    const findMostRecent = () => {
        if (cpl !== undefined) {
            return cpl.filter(pl => pl.user_id === usrId && pl.vendor_id === vndrId)
                .map(pl => {
                    // console.log(pl)
                    console.log(pl.date)
                    console.log(date)
                    if (pl.date > date) {
                        date = pl.date
                        newestPL = pl
                    }
                    console.log(date)
                    console.log(newestPL)
                    // setVendorUserPricelists(pl)
                })
        }
        console.log(newestPL)
    }

    return (
        <div>
            {displayMostRecent()}
            {/* {displayPL()} */}
        </div>
    );
}

export default PriceListCompare;
