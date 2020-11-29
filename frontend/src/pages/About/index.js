import React from 'react';
import TopMenu from '../../components/TopMenu';
import { Container, Row } from 'react-bootstrap';

function About(){
    return(
        <div>
            <Container>
                <Row className="d-flex justify-content-center">
                    <TopMenu></TopMenu>
                </Row>
            </Container>
            <Row className="d-flex justify-content-center">
                <h1>Projeto de devweb (ajuda nois Matheus *_* )</h1>
            </Row>            
        </div>
    );
};

export default About;