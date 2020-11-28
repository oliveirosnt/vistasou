import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import Catalogue from './pages/Catalogue';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/about" component={About} />
                <Route path="/catalogue" component={Catalogue} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;