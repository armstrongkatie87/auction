import React from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderProduct({product}) {
    return (
        <div className='col-md-5 m-1'>
            <Card>
                <CardImg top src={product.image} alt={product.name} />
                <CardBody>
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
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/auction">Auction</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.product.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.product.name}</h2>
                        <hr />
                    </div>
                </div>
                    <div className="row">
                        <RenderProduct product={props.product} />
                        <RenderTerms terms={props.terms} />
                    </div>
                </div>
            );
        }
        return <div />;
}

export default ProductInfo; 