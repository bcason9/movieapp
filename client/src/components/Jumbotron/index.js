import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './style.css'

function Jumbo({ children }) {
        return( 
            <Jumbotron>{children}</Jumbotron>
        );
    }


export default Jumbo;