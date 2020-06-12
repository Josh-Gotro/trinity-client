import React from 'react';

const ListItems = (props) => {

    const showItems = () => {
        // console.log(props);
        if (props.items.length > 0 ) { 
            return props.items.map(item => {
                return <div key={Math.random()}><span > {item.name}</span><span > ${item.price} </span><span >{item.size} </span><br></br></div>
            
            })
        }
    }

    return (
        <div>
            {showItems()}
            
        </div>
    );
}

export default ListItems;
