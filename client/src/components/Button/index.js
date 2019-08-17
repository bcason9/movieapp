import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';


function Btn(props) {
    return(
        <Button variant='primary' {...props}>
            Search
        </Button>
    )
}

export default Btn;