import React, { useState, } from 'react';
import { currentPriceLists } from './services/Atom';
import { useRecoilValue } from 'recoil';
import PriceList from './PriceList';

function PriceListCompare(props) {
    let cpl = useRecoilValue(currentPriceLists)
    let usrId = props.userInfo.id
    let vndrId = props.currentVendor.id
    let date = "0000-00-00"
    let newestPL = {}
    let compareDate = "0000-00-00"
    let comparePL = {}

    // template filter  
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
    // ^

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
    // ^

    const compareInvoices = () => {
        console.log(newestPL, comparePL)
        return newestPL.item_details.map(itm => {
            return comparePL.item_details.map(i => {
                if (itm.item_name === i.item_name) {
                    return <><span>{itm.item_name}</span><span>{`$${itm.price - i.price}`}</span><br></br></>
                }
            })
        })
    }

    // choose price list to compare to most recent. default to second most recent.
    const displaySelected = () => {
        choosePL();
        return <PriceList key={comparePL.id} plInfo={comparePL} />
    }

    const choosePL = () => {
        // build in a trigger that defaults to second most recent price list if another price list is not selected. 
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
    // ^

    return (
        <div>
            <br></br><br></br>
            {displayMostRecent()}
            <br></br><br></br>
            {displaySelected()}
            <br></br><br></br>
            {compareInvoices()}
        </div>
    );
}

export default PriceListCompare;
