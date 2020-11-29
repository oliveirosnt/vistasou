import React from 'react';
import vestido from '../images/vestido.jpg'
import { Card, Image } from 'react-bootstrap';

class Product extends React.Component{

    constructor(props) {
        super(props);
        this.state = { 
          fav: false
        };
    }

    render() {
        return (            
            <Card border="success" style={{ width: '18rem' }}>
                <Card.Img as={Image} src={vestido} fluid={true} alt="Card image" />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {this.props.value}
                        </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}


export default Product;