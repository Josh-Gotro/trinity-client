import React from 'react';
import ItemForPage from './ItemForPage';

const StageItemsForPage = (props) => {

    const checkProps = () => {
        console.log(props)
        // return <ItemForPage data={props}/>
    }

    return (
        < div className = "Items_container">
            lolol
            {checkProps()}
        </div>
    );
}

export default StageItemsForPage;
