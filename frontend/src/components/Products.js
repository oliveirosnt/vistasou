import React from 'react';
import vestido from '../images/vestido.jpg'
import Product from './Product';



class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
          promo: false
        };
    }

    handleChange() {
        this.setState({...this.state, promo:!this.state.promo})
    }

    renderProduct(_name, _value){
        return <Product name={_name} value={_value}></Product>
    }

    render () {
        if(this.state.promo == false) {
            return (
                <div class="products">
                    <h1>Promoção</h1>
                    <div class="promocao">
                        <input type="checkbox" defaultChecked={this.state.promo} onChange={() => this.handleChange()}></input>
                        {(this.state.promo && <span>BLACK FRIDAY!</span> || <span></span>)}
                    </div>
                    <ul>
                        <li>
                            {this.renderProduct("Vestido Azul", "119,90R$")}
                        </li>
                        <li>
                            {this.renderProduct("Cropped Vermelho", "79,90R$")}
                        </li>
                        <li>
                            {this.renderProduct("Calça Botões", "89,90R$")}
                        </li>
                        <li>
                            {this.renderProduct("Blusa Gola Alta", "69,90R$")}
                        </li>
                    </ul>
                </div>
                )
        } else {
            return (
                <div class="products">
                    <h1>Promoção</h1>
                    <div class="promocao">
                        <input type="checkbox" defaultChecked={this.state.promo} onChange={() => this.handleChange()}></input>
                        {(this.state.promo && <span>BLACK FRIDAY!</span> || <span></span>)}
                    </div>
                    <ul>
                        <li>
                            {this.renderProduct("Vestido Azul", "59,50$")}
                        </li>
                        <li>
                            {this.renderProduct("Cropped Vermelho", "39,90R$")}
                        </li>
                        <li>
                            {this.renderProduct("Calça Botões", "45,90R$")}
                        </li>
                        <li>
                            {this.renderProduct("Blusa Gola Alta", "35,90R$")}
                        </li>
                    </ul>
                </div>
            )
        }
    }
}

export default Products;