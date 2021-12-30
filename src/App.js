import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Auction from './components/AuctionComponent';
import './App.css';
import { PRODUCTS } from './shared/products';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        products: PRODUCTS
      };
  }

  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">Pacific Northwest Auction</NavbarBrand>
              </div>
              </Navbar>
              <Auction products={this.state.products} />
          </div>
      );
  }
}

export default App;
