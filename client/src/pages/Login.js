import React, { Component } from 'react';
import Jumbo from '../components/Jumbotron';



class Login extends Component {
    render() {
        return (
            <div className='body'>
                <Jumbo className='login'>
                <h1>Log In</h1>
                </Jumbo>
                
            </div>
           
        )
    }
}


export default Login;