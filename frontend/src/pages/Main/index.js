import React from 'react';
import TopMenu from '../../components/TopMenu';
import Banner from '../../components/Banner';
import DownMenu from '../../components/DownMenu';
import HighlightsProducts from '../../components/HighlightsProducts'
import { Container, Row } from 'react-bootstrap';

function Main(){
    return(
        <div>
            <Container fluid>
                <Row className="d-flex justify-content-center">
                    <Row>
                        <TopMenu></TopMenu>
                    </Row>
                    <Row>
                        <Banner></Banner>
                    </Row>
                    <Row>
                        <HighlightsProducts></HighlightsProducts>
                    </Row>
                    <Row>
                        <Banner></Banner>
                    </Row>
                    <Row>
                        <DownMenu></DownMenu> 
                    </Row>   
                </Row>
            </Container>
        </div>
    );
};

export default Main;