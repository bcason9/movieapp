import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/nav';
import Home from './pages/Home';
import Search from './pages/Search';
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
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
