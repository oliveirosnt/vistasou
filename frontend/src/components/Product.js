import React from 'react';
import vestido from '../images/vestido.jpg'

class Product extends React.Component{

    constructor(props) {
        super(props);
        this.state = { 
          check: false
        };
      }

    handleChange() {
        this.setState({...this.state, check:!this.state.check})
    }

    render() {
        return (
            <div class="product_01">
                <img src={vestido} alt="vestido" />
                <h3>{this.props.name}</h3>
                <h3>{this.props.value}</h3>
                <input type="checkbox" defaultChecked={this.state.check} onChange={() => this.handleChange()}></input>
                {(this.state.check && <span>Favorito</span> || <span></span>)}
            </div>
        )
    }
}

export default Product;