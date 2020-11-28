import React from 'react';
import { useForm } from 'react-hook-form';
import TopMenu from './TopMenu';

function NewProduct() {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));

    return (

        <div>
            <TopMenu></TopMenu>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input name="product_name" ref={register} placeholder="Nome do produto" />
            </div>
            <div>
            <input name="product_price" ref={register} placeholder="Preço" />
            </div>
            <input type="submit" />
            </form>
        </div>
    )
}

export default NewProduct;