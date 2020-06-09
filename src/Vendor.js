import React, { useState, useEffect } from 'react';


function Vendor() {
    const [vendors, setVendors] = useState("")

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
        fetch("http://localhost:3001/vendors", {
            headers: {
                Authorization: `Bearer ${token}`
            } 
        })
        .then(r => r.json())
        .then(vend => setVendors(vend) )
        }
    }, [])

    const whatisthis = () => {
        console.log(vendors)
        console.log(localStorage)
    }
    
    return (
        <div>
            {/* {console.log(localStorage)} */} main dfsf ds f asd
            {whatisthis()} 
        </div>
    );
    
}




export default Vendor;
