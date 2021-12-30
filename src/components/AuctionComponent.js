import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import ProductInfo from './ProductInfoComponent';

class Auction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProduct: null
        };
    }

    onProductSelect(product) {
        this.setState({selectedProduct: product});
    }

    render() {
        const auction = this.props.products.map(product => {

            return (
                <div key={product.id} className="col-md-5 m-1">
                   <Card onClick={() => this.onProductSelect(product)}>
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
                    <ProductInfo product={this.state.selectedProduct}/>
                </div>
            </div>
        );
    }
}

export default Auction;
