import React from 'react';
import TopMenu from '../../components/TopMenu';
import Products from '../../components/Products';
import { Container, Row } from 'react-bootstrap';

function Catalogue(){
    return(
        <div>
            <Container>
                <Row className="d-flex justify-content-center">
                    <TopMenu></TopMenu>
                </Row>
            </Container>

            <Row className="d-flex justify-content-center">
                <Products></Products>
            </Row>          
        </div>        
    );
};

export default Catalogue;