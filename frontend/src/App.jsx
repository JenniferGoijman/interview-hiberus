import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';

import Header from './components/Header/Header';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Movies from './containers/Movies/Movies';
import Genre from './containers/Genre/Genre';

function App() {
  return (
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/login' component={Login} exact />
          <Route path='/register' component={Register} exact />
          <Route path='/genre/:id' component={Genre} exact />
          <Route path='/movies/:query' component={Movies} exact />
          <Route path='/movies' component={Movies} exact />
          <Route path='/' component={Movies} exact />
        </Switch>
      </BrowserRouter>
  );
}

export default App;