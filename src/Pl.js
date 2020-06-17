import React from 'react';
import { compareMe } from './services/Atom';
import { useRecoilState } from 'recoil';

function Pl(props) {
    const [selectCompare, setSelectCompare] = useRecoilState(compareMe);

    const listDates = () => {

        if (props.info.price_lists !== undefined) {
            return props.info.price_lists.map(pl => {
                return <div onClick={() => holler(pl)} className="ListDates" key={pl.id} id={pl.id}>{pl.date}</div> 

            })
        } 
    }

    const holler = (pl) => {
        setSelectCompare(pl)
        console.log(selectCompare)
    }    
 

    return (
        <div >
            {listDates()}
        </div>
    );
}

export default Pl;
