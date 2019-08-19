import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';

class Nav extends Component {

    render() {
        return (
        <Navbar>
            <Navbar.Brand href='/'><h5 className='nav-item'>FilmBase</h5></Navbar.Brand>
            <Navbar.Brand href='/search'><h6 className='nav-item'>Search</h6></Navbar.Brand>
            <Navbar.Brand href='/login'><h6 className='nav-item'>Log In</h6></Navbar.Brand>
            <Navbar.Brand href='/signup'><h6 className='nav-item'>Sign Up</h6></Navbar.Brand>
        </Navbar>
    
            
        );
    }


}

export default Nav;