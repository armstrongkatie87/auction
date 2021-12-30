import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Auction from './AuctionComponent';
import ProductInfo from './ProductInfoComponent';
import { PRODUCTS } from '../shared/products';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: PRODUCTS,
            selectedProduct: null
        };
    }

    onProductSelect(productId) {
        this.setState({selectedProduct: productId});
    }

    render() {
        return (
            <div>
                <Navbar dark color="info">
                    <div className="container">
                        <NavbarBrand href="/">Pacific Northwest Auction</NavbarBrand>
                    </div>
                </Navbar>
                <Auction products={this.state.products} onClick={productId => this.onProductSelect(productId)}/>
                <ProductInfo product={this.state.products.filter(product => product.id === this.state.selectedProduct)[0]} />
            </div>
        );
    };
}

export default Main;