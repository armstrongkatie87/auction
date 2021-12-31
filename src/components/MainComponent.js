import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
                <Header />
                <Auction products={this.state.products} onClick={productId => this.onProductSelect(productId)} />
                <ProductInfo product={this.state.products.filter(product => product.id === this.state.selectedProduct)[0]} />
                <Footer />
            </div>
        );
    };
}

export default Main;