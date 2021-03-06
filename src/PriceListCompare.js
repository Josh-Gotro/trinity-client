import React from 'react';
import { currentPriceLists, compareMe } from './services/Atom';
import { useRecoilValue } from 'recoil';
import PriceList from './PriceList';
import './images/up.png'

function PriceListCompare(props) {
    let cpl = useRecoilValue(currentPriceLists)
    let selectCompare = useRecoilValue(compareMe)
    let usrId = props.userInfo.id
    let vndrId = props.currentVendor.id
    let date = "0000-00-00"
    let newestPL = {}
    let compareDate = "0000-00-00"
    let comparePL = {}

    // find most recent price list and display it
    const displayMostRecent = () => {
        findMostRecent();
        return <PriceList key={newestPL.id} plInfo={newestPL} />
    }

    const findMostRecent = () => {
        if (cpl !== undefined) {
            return cpl.filter(pl => pl.user_id === usrId && pl.vendor_id === vndrId).map(pl => {
                if (pl.date > date) {
                    date = pl.date
                    newestPL = pl
                }
            })
        }
    }
    // ^

    const compareInvoices = () => {
        // console.log(newestPL, comparePL)
        if (comparePL.item_details !== undefined) {
            return newestPL.item_details.map(itm => {
                return comparePL.item_details.map(i => {
                    if (itm.item_name === i.item_name) {
                        let priceDif = itm.price - i.price
                        if (priceDif < 0) {
                            return <>
                                <div style={{color: "rgb(160, 255, 105)"}} id="ca" key={Math.random()} >{itm.item_name}</div>
                                <div style={{color: "rgb(160, 255, 105)"}} id="cs" key={Math.random()} >DOWN</div>
                                <div style={{color: "rgb(160, 255, 105)"}} id="cd" key={Math.random()} >{`$${priceDif.toFixed(2)}`}</div>
                                <div style={{color: "rgb(160, 255, 105)"}} id="cf" key={Math.random()} >{`per ${itm.pack_size}`}</div>
                            </>
                        } else if (priceDif > 0) {
                            return <>
                                <div style={{color: "#ed1b70"}} id="ca" key={Math.random()} >{itm.item_name}</div>
                                <div style={{color: "#ed1b70"}} id="cs" key={Math.random()} >UP</div>
                                <div style={{color: "#ed1b70"}} id="cd" key={Math.random()} >{`$${priceDif.toFixed(2)}`}</div>
                                <div style={{color: "#ed1b70"}} id="cf" key={Math.random()} >{`per ${itm.pack_size}`}</div>
                            </>
                        } else {
                            return <>
                                <div id="ca" key={Math.random()} >{itm.item_name}</div>
                                <div id="cs" key={Math.random()} >NO CHANGE</div>
                                <div id="cd" key={Math.random()} >{`$${priceDif.toFixed(2)}`}</div>
                                <div id="cf" key={Math.random()} >{`per ${itm.pack_size}`}</div>
                            </>

                        }
                    }
                })
            })
        }
    }
    
    // choose price list to compare to most recent. default to second most recent.
    const displaySelected = () => {
        if (selectCompare.id !== undefined) {
            findPL()
            console.log(comparePL)
            return <PriceList key={comparePL.id} plInfo={comparePL} />
        } else {
            choosePL();
            console.log(comparePL)
            return <PriceList key={comparePL.id} plInfo={comparePL} />
        }

    }

    const findPL = () => {
        if (cpl !== undefined) {
            return cpl.filter(pl => pl.id === selectCompare.id).map(pl => {
                compareDate = pl.date
                comparePL = pl
            })
        }
    }

    const choosePL = () => {
        if (cpl !== undefined) {
            return cpl.filter(pl => pl.user_id === usrId && pl.vendor_id === vndrId)
                .map(pl => {
                    // console.log(pl)
                    if (pl.date > compareDate && pl.date !== date) {
                        compareDate = pl.date
                        comparePL = pl
                    }
                })
        }
    }
    // ^

    return (
        <>
            <div className="GridPLC" >
                <h1 className="FormTitle3">Compare</h1>
                <div className="col" >{displayMostRecent()}</div>

                <div className="col" >{displaySelected()}</div>
            </div >
            <div className="GridPLCBottom" >
                <div className="row" >{compareInvoices()} </div>
            </div >
        </>
    );
}

export default PriceListCompare;
