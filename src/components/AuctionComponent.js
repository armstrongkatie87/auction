import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderAuctionItem({product, onClick}) {
    return (
        <Card onClick={() => onClick(product.id)}>
            <CardImg width="70%" src={product.image} alt={product.name} />
            <CardImgOverlay>
                <CardTitle>{product.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Auction(props){

    const auction = props.products.map(product => {
        return (
            <div key={product.id} className='col-md-5 m-1'>
                <RenderAuctionItem product={product} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className='container'>
            <div className='row'>
                {auction}
            </div>
        </div>
    );
}

export default Auction;
