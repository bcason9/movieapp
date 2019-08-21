import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';


function Btn(props) {
    return(
        <Button variant='dark' {...props}>
            Submit
        </Button>
    )
}

export default Btn;