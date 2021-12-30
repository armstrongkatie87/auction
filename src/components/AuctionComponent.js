import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Auction extends Component {

    render() {
        const auction = this.props.products.map(product => {

            return (
                <div key={product.id} className="col-md-5 m-1">
                   <Card onClick={() => this.props.onClick(product.id)}>
                        <CardImg width="100%" src={product.image} alt={product.name} />
                        <CardImgOverlay>
                            <CardTitle>{product.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })

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
