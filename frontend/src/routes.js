import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import Catalogue from './pages/Catalogue';
import NewProduct from './components/NewProduct';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/about" component={About} />
                <Route path="/newProduct" component={NewProduct} />
                <Route path="/catalogue/:id?" component={Catalogue} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;