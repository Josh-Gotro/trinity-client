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
    let compareDate = "0000-00-00"
    let comparePL = {}




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

    // choose price list to compare to most recent. default to second most recent.
    const displaySelected = () => {
        choosePL();
        return <PriceList key={comparePL.id} plInfo={comparePL} />
    }

    const choosePL = () => {
        if (cpl !== undefined) {
            return cpl.filter(pl => pl.user_id === usrId && pl.vendor_id === vndrId)
                .map(pl => {
                    if (pl.date > compareDate) {
                        compareDate = pl.date
                        comparePL = pl
                    }
                })
        }
    }
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


    // find most recent price list and display it
    const displayMostRecent = () => {
        findMostRecent();
        return <PriceList key={newestPL.id} plInfo={newestPL} />
    }

    const findMostRecent = () => {
        if (cpl !== undefined) {
            return cpl.filter(pl => pl.user_id === usrId && pl.vendor_id === vndrId)
            .map(pl => {
                if (pl.date > date) {
                        date = pl.date
                        newestPL = pl
                }
            })
        }
    }
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    return (
        <div>
            <br></br><br></br>
            {displayMostRecent()}
            <br></br><br></br>
            {/* {compareInvoices()} */}
            <br></br><br></br>
            {displaySelected()}
        </div>
    );
}

export default PriceListCompare;
