import React, { useState, useEffect } from 'react';
import { currentUser, currentPriceLists } from './services/Atom';
import { useRecoilValue } from 'recoil';
import StageItemsForPage from './StageItemsForPage';

const Items = () => {
    const [pricelists, setPriceLists] = useState(undefined);

    let usr = useRecoilValue(currentUser)
    let cpl = pricelists
    let itemType = []
    let itemPacket = []

    useEffect(() => {
        fetchPriceLists()
    }, [setPriceLists])


    const fetchPriceLists = () => {
        const token = localStorage.getItem("token")
        if (token) {
            fetch("http://localhost:3001/price_lists", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(r => r.json())
                .then(plsts => setPriceLists(plsts))
        }
    }


    // const displayPL = () => {

    //     if (cpl !== undefined && usr.id !== undefined) {
    //         console.log(priceLists)
    //         console.log(allItems)
    //         return cpl.filter(pl => pl.user_id === usr.id)
    //             .map(plst => { 
    //                 return plst.item_details.map(pl => { 
    //                     return <div className="itmPage" key={Math.random()} >
    //                         <ItemForPage key={Math.random()} itemDetails={allItems} vendorName={plst.vendor.name} itemName={pl.item_name} itemDetails={pl} /> 
    //                         </div>
    //                 })

    //             })
    //     }
    //     return null
    // }

    const displayPL = () => {
        gatherItemDetails()
        sortByType()
    }

    const gatherItemDetails = () => {
        if (cpl !== undefined && usr.id !== undefined) {
            return cpl.filter(pl => pl.user_id === usr.id)
            .map(plst => {
                return itemType.push(plst.item_details)
            })
        }
    }

    const sortByType = () => {
        let itemTypes = itemType.flat()
        let sortedItems = itemTypes.sort((a, b) => (a.item_name > b.item_name) ? 1 : (a.item_name === b.item_name) ? ((a.price > b.price) ? 1 : -1) : -1)
        return < StageItemsForPage key={Math.random()} sorted={sortedItems } />
        // sortedItems.map(pl => {
        //     let it = sortedItems.filter(it => it.item_name === pl.item_name)
        //     console.log(it)
        //     return <div className="itmPage" key={Math.random()} ><StageItemsForPage key={Math.random()} itemCluster={it} /></div>
        // })
        // return null
    }

    return (
        <>
fghfg
            {displayPL()}
            
        </>
    );
}

export default Items;
