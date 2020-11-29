import React from 'react';
import Product from './Product';
import api from '../api'

class Products extends React.Component {

    state={
        productOne:[],
        productTwo:[],
        productThree:[],
        productFour:[],
        };

    async componentDidMount() {
        const responseOne = await api.get('products/0');
        const responseTwo = await api.get('products/1');
        const responseThree = await api.get('products/2');
        const responseFour = await api.get('products/3');
        this.setState(
            { 
                productOne: responseOne.data, 
                productTwo: responseTwo.data, 
                productThree: responseThree.data, 
                productFour: responseFour.data, 
            }
        );
    }

    renderProductOne(display) {
        return <li> <Product name={this.state.productOne.name} value={this.state.productOne.price}></Product> </li>;        
    }

    renderProductTwo(display) {
        return <li> <Product name={this.state.productTwo.name} value={this.state.productTwo.price}></Product> </li>;        
    }

    renderProductThree(display) {
        return <li> <Product name={this.state.productThree.name} value={this.state.productThree.price}></Product> </li>;        
    }

    renderProductFour(display) {
        return <li> <Product name={this.state.productFour.name} value={this.state.productFour.price}></Product> </li>;        
    }

    render () {

        return (
            <div className="d-flex justify-content-center">
                <ul>
                    {this.renderProductOne()}
                </ul>
                <ul>
                    {this.renderProductTwo()}
                </ul>
                <ul>
                    {this.renderProductThree()}
                </ul>
                <ul>
                    {this.renderProductFour()}
                </ul>

            </div>
        )
    }
}

export default Products;