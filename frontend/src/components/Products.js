import React from 'react';
import Product from './Product';
import api from '../api'
import { Row, Col, Container } from 'react-bootstrap';

class Products extends React.Component {

    state={
        products:[],
        search: [],
        };

    async componentDidMount() {
        const response = await api.get('products');
        this.setState({ products: response.data });
    }

    renderProduct(display) {
        console.log(display)
        if (this.state.search.length > 0) {

        return this.state.products.filter(product => product.name.toLowerCase().includes(this.state.search.toLowerCase().trim())).map((product) => (<li>
            <Product name={product.name} value={product.price}></Product>
        </li>));
    }
        else return this.state.products.map((product) => (

            <Col>
                <Product name={product.name} value={product.price}></Product>
            </Col>


        ));

    }

    onChange(search) {
        this.setState({search: search.target.value})
    }

    render () {

        return (
            <Container>
                <Row className="d-flex justify-content-center"> 
                    <input name="busca" onChange={event => this.setState({search: event.target.value})} placeholder="Buscar produto" />
                </Row>
                <Row lg="4" className="d-flex justify-content-center" sm="4">
                    {this.renderProduct()}
                </Row>
            </Container>
        )
    }
}

export default Products;