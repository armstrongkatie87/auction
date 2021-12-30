import { Component } from "react/cjs/react.production.min";
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class ProductInfo extends Component {

    renderTerms(terms) {
        if(terms) {
            return(
                <div className="col-md-5 m-1">
                    <h4>Terms</h4>
                    {terms.map(term => <div className="mb-3" key={term.id}> <strong>{term.title}</strong> <br />-- <small>{term.text}</small> <br /></div>)}
                </div>
            )
        }
        return (<div></div>)
    }

    renderProduct(product) {
        return (
        <div className="col-md-5 m-1">
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

    render() {
        if(this.props.product) {
            return (
                <div className="row">
                    {this.renderProduct(this.props.product)}
                    {this.renderTerms(this.props.product.terms)}
                </div>
                )
        }
        return <div></div>
    } 
}

export default ProductInfo; 