import React from 'react';
import './stylesheet.css';
import TopMenu from '../../components/TopMenu';
import Banner from '../../components/Banner';
import Products from '../../components/Products';
import DownMenu from '../../components/DownMenu';

function Main(){
    return(
        <div>

        <header>
            <meta charset="utf-8"></meta>
            <link rel="style" href="stylesheet.css"></link>
        </header>

        <TopMenu></TopMenu>
        <Banner></Banner>
        <Products></Products>
        <Banner></Banner>
        <DownMenu></DownMenu>  

        </div>
    );
};

export default Main;