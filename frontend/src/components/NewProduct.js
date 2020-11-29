import React from 'react';
import { useForm } from 'react-hook-form';
import TopMenu from './TopMenu';
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
            <TopMenu></TopMenu>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input name="name" ref={register} placeholder="Nome do produto" />
            </div>
            <div>
            <input name="price" ref={register} placeholder="Preço" />
            </div>
            <input type="submit" />
            </form>
        </div>
    )
}

export default NewProduct;