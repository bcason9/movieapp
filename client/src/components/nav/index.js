import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';

class Nav extends Component {

    render() {
        return (
        <Navbar>
            <Navbar.Brand href='/'><h5>Film App</h5></Navbar.Brand>
            <Navbar.Brand href='/search'><h6>Search</h6></Navbar.Brand>
        </Navbar>
    
            
        );
    }


}

export default Nav;