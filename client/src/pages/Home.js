import React, { Component } from 'react';
import Jumbo from '../components/Jumbotron';


class Home extends Component {
    render() {
        return (
            <div className='body'>
                <Jumbo>
                <h1>Film App Home Page</h1>
                </Jumbo>
                
            </div>
           
        )
    }
}


export default Home;