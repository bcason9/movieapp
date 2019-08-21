import React, { Component } from 'react';
import Jumbo from '../components/Jumbotron';



class Home extends Component {
    render() {
        return (
            <div className='body'>
                <Jumbo className='home'>
                <h1 id='home-header'>FilmBase</h1>
                <br></br>
                <p>FilmBase allows users to search for, rate, and review their favorite films. See what our users have to say about your favorite films!</p>
                <br></br>
                
                <a href='/search'>Search Films Now</a>
                </Jumbo>
                
            </div>
           
        )
    }
}


export default Home;