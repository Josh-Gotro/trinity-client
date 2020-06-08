import React, { Component } from 'react';


class Vendor extends Component {
    constructor() {
        super()
        this.state = {
            vendors: null
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/vendors").then(r => r.json()).then(vendor => this.setState({ vendors: vendor }))
    } 
    render() {
        return (
            <div>
                    {/* {console.log(localStorage)} */} main page contentfsnlskdj
            </div>
        );
    }
}




export default Vendor;
