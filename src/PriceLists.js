import React, { useEffect } from 'react';
import { currentUser, currentPriceLists, currentVendors } from './services/Atom';
import { useRecoilValue, useRecoilState } from 'recoil';
import PriceList from './PriceList';



const PriceLists = () => {
    const [vendors, setVendors] = useRecoilState(currentVendors);
    const [priceLists, setPriceLists] = useRecoilState(currentPriceLists);
    let usr = useRecoilValue(currentUser)

    useEffect(() => {
        fetchVendors()
    }, [setVendors])

    useEffect(() => {
        fetchPL()
    }, [setPriceLists])

    const fetchPL = () => {
        const token = localStorage.getItem("token")
        if (token) {
            fetch("http://localhost:3001/price_lists", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(r => r.json())
                .then(plists => setPriceLists(plists))
        }
    }

    const fetchVendors = () => {
        const token = localStorage.getItem("token")
        if (token) {
            fetch("http://localhost:3001/vendors", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(r => r.json())
                .then(vend => setVendors(vend))
        }
    }

    const displayPL = () => {
        // console.log(priceLists)
        if (priceLists !== undefined && usr.id !== undefined) {
            return priceLists.filter(pl => pl.user_id === usr.id)
                .map(pl => {
                    // console.log(pl)
                    return <div key={Math.random()} className="plPage">
                        <h4 className="FormTitle2" >{pl.vendor.name}</h4>
                        <PriceList key={pl.id} plInfo={pl} />
                        <button className="deleteButton" onClick={() => deleteMe(pl.id)}>Delete PL</button>
                        </div>
                })
        }
        return null
    }

    const deleteMe = (id) => {
        fetchDeletePL(id)
    }

    const fetchDeletePL = (id) => {
        const token = localStorage.getItem("token")
        console.log(id)
        console.log("deleted from db :P ")

        if (token) {
            fetch(`http://localhost:3001/price_lists/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            })
            .then(r => r.json())
            .then(data => {
                fetchPL()
                fetchVendors()
                console.log(data)
            })
        }
    }



    return (
        <div className="Items_container">
            {displayPL()}
        </div>
    );
}
export default PriceLists;
