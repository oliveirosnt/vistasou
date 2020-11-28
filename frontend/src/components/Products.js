import React from 'react';
import Product from './Product';



class Products extends React.Component {

    renderProduct(_name, _value){
        return <Product name={_name} value={_value}></Product>
    }

    render () {
        return (
            <div class="products">
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
    }
}

export default Products;