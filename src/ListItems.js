import React from 'react';
import Item from './Item';

const ListItems = (props) => {

    const showItems = () => {

        if (props.items.length > 0 ) { 
            return props.items.map(item => {
              return <Item key={Math.random()} myID={props.itemDetails.id} itemName={item.name} itemDetails={item} />
            })
        }
    }

    return (
        <div className="colPLI">
            {showItems()}
            
        </div>
    );
}

export default ListItems;
