import React from 'react';
import vestido from '../images/vestido.jpg'

class Product extends React.Component{

    constructor(props) {
        super(props);
        this.state = { 
          fav: false
        };
      }

    handleChange() {
        this.setState({...this.state, fav:!this.state.fav})
    }

    render() {
        return (
            <div className="product_01">
                <img src={vestido} alt="vestido" />
                <h3>{this.props.name}</h3>
                <h3>{this.props.value}</h3>
                <input type="checkbox" defaultChecked={this.state.fav} onChange={() => this.handleChange()}></input>
                {(this.state.fav && <span>Favorito</span> || <span></span>)}
            </div>
        )
    }
}

export default Product;