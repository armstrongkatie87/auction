import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderAuctionItem({product}) {
    return (
        <Card>
            <Link to={`/auction/${product.id}`}>
                <CardImg width="70%" src={product.image} alt={product.name} />
                <CardImgOverlay>
                    <CardTitle>{product.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Auction(props){

    const auction = props.products.map(product => {
        return (
            <div key={product.id} className='col-md-5 m-1'>
                <RenderAuctionItem product={product} />
            </div>
        );
    });

    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Auction</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Auction</h2>
                    <hr />
                </div>
            </div>
            <div className='row'>
                {auction}
            </div>
        </div>
    );
}

export default Auction;
