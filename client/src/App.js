import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/nav';
import Home from './pages/Home';
import Search from './pages/Search';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/search' component={Search} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/signup' component={Signup} exact />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
