import React from 'react';
import { currentUser, currentPriceLists } from './services/Atom';
import { useRecoilValue } from 'recoil';
import Item from './Item';



const Items = () => {
    let usr = useRecoilValue(currentUser)
    let cpl = useRecoilValue(currentPriceLists)
    let bucket = []
    let flatBucket = []

    const displayPL = () => {
        gatherItemDetails();
        flatBucket = bucket.flat();
        return flatBucket.sort((a, b) => (a.item_name > b.item_name) ? 1 : (a.item_name === b.item_name) ? ((a.price > b.price) ? 1 : -1) : -1)
            .map(pl => {
                // console.log(pl)
                return <div className="display_card_item">
                    <div id="ddd">{nameDate(pl.item_id, pl.id)}</div>
                    <Item key={Math.random()} itemName={pl.item_name} itemDetails={pl} />
                </div>
            })
    }

    const gatherItemDetails = () => {
        if (cpl !== undefined && usr.id !== undefined) {
            return cpl.filter(pl => pl.user_id === usr.id)
                .map(plst => {
                    return bucket.push(plst.item_details)
                })
        }
        // return null
    }

    const nameDate = (plID) => {
        console.log(cpl)
        console.log(plID)
        if (cpl !== undefined && usr.id !== undefined) {
            return cpl.filter(pl => pl.user_id === usr.id)
                .map(plst => {
                    console.log(plst)
                    return plst.item_details.map(pl => {
                        if (plID === pl.id) {
                            return <div id="ddd">{plst.vendor.name}{<br></br>}{plst.date}</div>
                        }
                    })
                })
        }
        return null
    }


    return (
        <div key={Math.random()} className="Items_container">

            {displayPL()}

        </div>
    );
}

export default Items;



// {id: 4, item_id: 4, item_name: "saffron", pack_size: "gram", price: 12.99}
// {id: 10, item_id: 10, item_name: "carrots", pack_size: "lb", price: 2.99}
// { id: 10, item_id: 10, item_name: "carrots", pack_size: "lb", price: 2.99 }

    // const displayPL = () => {
    //     gatherItemDetails();
    //     flatBucket = bucket.flat();
    //     flatBucket.sort((a, b) => (a.item_name > b.item_name) ? 1 : (a.item_name === b.item_name) ? ((a.price > b.price) ? 1 : -1) : -1)
    //     .map(pl => {
    //         console.log(pl)
    //         return <div className="display_card_item">
    //         <div id="ddd">name</div> 
    //         <Item key={Math.random()} itemName={pl.item_name} itemDetails={pl} /> 
    //         </div>
    //     })
    // }

    // const gatherItemDetails = () => {
    //     if (cpl !== undefined && usr.id !== undefined) {
    //         return cpl.filter(pl => pl.user_id === usr.id)
    //             .map(plst => {
    //                 return bucket.push(plst.item_details)
    //             })
    //     }
    //     // return null
    // }

    // const displayPL = () => {
    //     if (cpl !== undefined && usr.id !== undefined) {
    //         return cpl.filter(pl => pl.user_id === usr.id)
    //             .map(plst => {
    //                 return plst.item_details.map(pl => {
    //                     return <div className="display_card_item">
    //                         <div id="ddd">{plst.vendor.name}</div>
    //                         <Item key={Math.random()} itemName={pl.item_name} itemDetails={pl} />
    //                     </div>
    //                 })
    //             })
    //     }
    //     return null
    // }
