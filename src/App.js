import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Auction from './components/AuctionComponent';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">Pacific Northwest Auction</NavbarBrand>
              </div>
              </Navbar>
              <Auction />
          </div>
      );
  }
}

export default App;
