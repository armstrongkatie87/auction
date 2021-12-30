import React, { Component } from 'react';

class Auction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 0,
                    name: 'Jackie ',
                    image: 'assets/images/jChair.jpeg',
                    description: "MID CENTURY MODERN ARMCHAIR.",
                    price: ''
                },
                {
                  id: 1,
                  name: 'Sony Playstation 5 ',
                  image: 'assets/images/sony-playstation-5.png',
                  description: "(Sony PS5 Disc) with PULSE 3D Wireless Gaming Headset and Micro SD Card USB Adapter Bundle.",
                  price: ''
                },
                {
                    id: 2,
                    name: 'Retro Abstract Painting',
                    image: 'assets/images/sqPaint.png',
                    elevation: 2901,
                    description: "Mid-Century Modern Squares GREEN, Retro Abstract Modernist 50s style Art."
                }
            ],
        };
    }

    render() {
        const auction = this.state.products.map(product => {
            return (
                <div key={product.id} className="col">
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                </div>
            );
        });
        return (
            <div className="container">
                <div className='row'>
                    {auction}
                </div>
            </div>
        );
    }
}

export default Auction;
