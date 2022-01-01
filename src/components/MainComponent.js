import React, { Component } from 'react';
import Auction from './AuctionComponent';
import ProductInfo from './ProductInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        products: state.products,
        terms: state.terms,
        partners: state.partners,
        promotions: state.promotions
    };
};

class Main extends Component {
    
    render() {
        const HomePage = () => {
            return (
                <Home
                    product={this.props.products.filter(product => product.featured)[0]}
                    promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.props.partners.filter(partner => partner.featured)[0]}
                />
            );
        };

        const ProductWithId = ({match}) => {
            return (
                <ProductInfo product={this.props.products.filter(product => product.id === +match.params.productId)[0]} 
                  terms={this.props.terms.filter(term => term.productId === +match.params.productId)} />
            );
        };        

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/auction' render={() => <Auction products={this.props.products} />} />
                    <Route path='/auction/:productId' component={ProductWithId} />
                    <Route exact path='/aboutus' render={() => <About partners={this.state.partners} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' render={() => <About partners={this.props.partners} /> } />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps)(Main));