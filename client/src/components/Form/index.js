import React from 'react';
import Form from 'react-bootstrap/Form';
import './style.css';

function Inputs(props) {
    return(
        <Form>
            <Form.Label>Search Films</Form.Label>
            <Form.Control type='text' placeholder='Search' {...props}/>
        </Form>
    )
}


export default Inputs;