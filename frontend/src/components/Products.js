import React from 'react';
import Product from './Product';
import api from '../api'
import { Row, Col, Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';


import {  RouteComponentProps } from 'react-router-dom';

class Products extends React.Component<RouteComponentProps<{id: string}>> {

    state={
        products:[],
        search: [],
        };


    async componentDidMount() {
        const response = await api.get('products');
        this.setState({ products: response.data });

    }

    componentDidUpdate(prevProps) {
        console.log(this.props.location);
        const locationChanged =
            this.props.location !== prevProps.location;

    }


    onClick(product) {
        const path = '/catalogue/';
        this.props.history.push({pathname: path + product.id})

    }
    renderProduct(display) {
        if (this.props.match.params.id){
            const displayProduct = this.state.products.filter(product => product.id.toString() === this.props.match.params.id);
            if(displayProduct[0])
                return <Product name={displayProduct[0].name} value={displayProduct[0].price}></Product>;
        }

        console.log(display)
        if (this.state.search.length > 0) {

        return this.state.products.filter(product => product.name.toLowerCase().includes(this.state.search.toLowerCase().trim())).map((product) => (<li>
            <Product name={product.name} value={product.price}></Product>
        </li>));
    }
        else return this.state.products.map((product) => (

            <div className="row" onClick={() => this.onClick(product)}>
                <Product name={product.name} value={product.price} ></Product>
            </div>


        ));

    }

    onChange(search) {
        this.setState({search: search.target.value})
    }

    render () {

        return (
            <Container>
                {!this.props.match.params.id ?
                <Row className="d-flex justify-content-center">
                    <input name="busca" onChange={event => this.setState({search: event.target.value})} placeholder="Buscar produto" />
                </Row> : null}
                <Row lg="4" className="d-flex justify-content-center" sm="4">
                    {this.renderProduct()}
                </Row>
            </Container>
        )
    }
}

export default withRouter(Products);