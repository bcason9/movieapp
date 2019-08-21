import React from 'react';
import Form from 'react-bootstrap/Form';
import './style.css'

export function Review(props) {
    return(
        <Form.Group className='reviewbox' controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Review</Form.Label>
            <Form.Control as="textarea" rows="5" {...props} />
        </Form.Group>
    )
}

export function Dropdown(props) {
    return(
        <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Your Rating</Form.Label>
        <Form.Control className='dropdownbox' as="select" {...props}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </Form.Control>
      </Form.Group>

    )
}

