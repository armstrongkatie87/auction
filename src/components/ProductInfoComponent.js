import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

function RenderProduct({product}) {
    return (
        <div className='col-md-5 m-1'>
            <Card>
                <CardImg top src={product.image} alt={product.name} />
                <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                    <CardText>{product.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function RenderTerms({terms}) {
    if(terms) {
        return(
            <div className='col-md-5 m-1'>
                <h4>Auction Terms</h4>
                {terms.map(term => <div className='mb-3' key={term.id}> <small><strong>{term.title}</strong><br />--{term.text}</small> <br /></div>)}
            </div>
        )
    }
    return (<div></div>)
}

function ProductInfo(props) {
        if(props.product) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderProduct product={props.product} />
                        <RenderTerms terms={props.product.terms} />
                    </div>
                </div>
            );
        }
        return <div />
}

export default ProductInfo; 