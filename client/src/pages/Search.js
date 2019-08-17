import React, { Component } from 'react';
import Inputs from '../components/Form';
import Btn from '../components/Button';
import Jumbo from '../components/Jumbotron';
import axios from 'axios';

class Search extends Component {

    state = {};


    componentDidMount() {
        console.log('mount')
    }

    getMovies = e => {
        e.preventDefault();

        console.log(`${this.state.movie}`)

        axios
        .get(`https://www.omdbapi.com/?t=${this.state.movie}&y=&plot=short&apikey=808e3d0`)
        .then(res => {
            console.log(res)
        });
        
    };

    handleChange = e => {
        console.log(e);
        console.log(e.target);
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        this.setState({ [name]: value });
      };

    render() {
        return (
            <div className='body'>
                <Jumbo>
                <h1>Search for a Film</h1>
                
                <Inputs
                    name='movie'
                    onChange={this.handleChange}
                    value={this.state.movie} />
                <Btn onClick={this.getMovies}/>
                </Jumbo>
                
                
            </div>
           
        );
    }
}


export default Search;