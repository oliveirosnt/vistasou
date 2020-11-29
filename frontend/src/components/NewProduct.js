import React from 'react';
import { useForm } from 'react-hook-form';
import TopMenu from './TopMenu';
import { Container, Row, Form, Button } from 'react-bootstrap';

const axios = require('axios');

function NewProduct() {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => postRequest(data)

    async function postRequest(data) {

        let res = await axios.post('http://localhost:3000/products/', data);

        if (res.status === 200) alert(`${res.data.name} adicionado`);
    }

    return (

        <div>
            <Container fluid>
                <Row className="d-flex justify-content-center">
                    <TopMenu></TopMenu>
                </Row>
            </Container>

            <Row className="d-flex justify-content-center">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="formNameProduct">
                        <Form.Label>Nome do produto</Form.Label>
                        <Form.Control placeholder="Nome" ref={register} name="name"/>
                    </Form.Group>

                    <Form.Group controlId="formPriceProduct">
                        <Form.Label>Preço do produto</Form.Label>
                        <Form.Control placeholder="Preço" name="price" ref={register}/>
                        <Form.Text className="text-muted">
                            Adicionar em formato "XXX,XXR$"
                        </Form.Text>
                    </Form.Group>
                    
                    <Button variant="info" type="submit">
                        Submit
                    </Button>
                </Form>
            </Row>


            
        </div>
    )
}

export default NewProduct;