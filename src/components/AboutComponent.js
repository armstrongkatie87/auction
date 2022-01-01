import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderPartner ({partner}) {
    if (partner) {
        return (
            <React.Fragment>
                <Media object src={partner.image} alt={partner.name} width="150" />
                <Media body className="ml-5 mb-4">
                    <Media heading>{partner.name}</Media>
                    <Media>{partner.description}</Media>
                </Media>
            </React.Fragment>
        );
    }
    return (
        <div></div>
    );
}

function About(props) {

    const partners = props.partners.map(partner => {
        return (
            <Media tag="li" key={partner.id}>
                <RenderPartner partner={partner} />
            </Media>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <p>Pacific Northwest Auction was founded by a couple from Bremerton that got tired of fighting to make change (as in pennies on the dollar) online after everyone took their cut from their sale. Tired of fighting companies and scalpers at thrift stores, garage sales and estate sales to get a fair deal, only to see those things turn up online at tripple the price.</p>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Our Mission</h3>
                    <p>We make a fair amount and you get a fair price, it's as simple as that. Thus, we want it to be a win-win for all involved when you buy or sell with Pacific Northwest Auction</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-info text-white"><h3>Services</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Auctions</dt>
                                <dt className="col-6">Transition Sales</dt>
                                <dt className="col-6">Estate Sales</dt>
                                <dt className="col-6">Consignments</dt>
                                <dt className="col-6">Liquidations</dt>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">No matter what people tell you, words and ideas can change the world.</p>
                                <footer className="blockquote-footer">Robin Williams,{' '}
                                    <cite title="Source Title">"Dead Poets Society" -
                                    as John Keating</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Community Partners</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                        {partners}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About; 