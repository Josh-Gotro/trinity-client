import React, { useState } from 'react';
import Item from './Item';

const ListItems = (props) => {
    const [showItem, setShowItem] = useState(true);

    const showItems = () => {
        // setShowItem(true)
        if (props.items.length > 0 ) { 
            return props.items.map(item => {
                // console.log(item)
              return <Item key={Math.random()} myID={props.itemDetails.id} itemName={item.name} itemDetails={item} />

            
            })
        }
    }

    const peekaBoo = () => {
        setShowItem(prev => !prev)
        showItems()
    }


    const deleteMe = () => {
        peekaBoo()
        const id = props.itemDetails.id
        // console.log(props.itemDetails.id)
        // console.log(itemID)
        // console.log("please delte me ")
        // fetchDeleteItemDetails(id)
        // deleteFromPage()
        // props.fetchV()
    }

    const fetchDeleteItemDetails = (id) => {
        const token = localStorage.getItem("token")
        console.log(id)
        console.log("deleted from db :P ")

        if (token) {
            fetch(`http://localhost:3001/item_details/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            });
        }
    }

    return (
        <div className="colPLI">
            {showItems()}
            
        </div>
    );
}

export default ListItems;
