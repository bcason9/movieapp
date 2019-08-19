import React, { Component } from 'react';
import Inputs from '../components/Form';
import Btn from '../components/Button';
import Jumbo from '../components/Jumbotron';
import axios from 'axios';

class Search extends Component {

    state = {
        movie: [],
        movieRes: []
    };


    componentDidMount() {
        console.log('mount')
        
    }

    getMovies = e => {
        e.preventDefault();

        //console.log(`${this.state.movie}`)

        axios
        .get(`https://www.omdbapi.com/?t=${this.state.movie}&y=&plot=short&apikey=808e3d0`)
        .then(res => {
            console.log(res.data)
            const movieResult = res.data;
            this.setState({movieRes: movieResult});
            console.log(`${this.state.movieRes.Title}`)
            const resDiv = document.getElementById('res-div');
            
            resDiv.style.padding = '20px';

            if (typeof this.state.movieRes.Title !== 'undefined') {
            resDiv.innerHTML = `<h3>${this.state.movieRes.Title}, ${this.state.movieRes.Year}</h3>\n<img src=${this.state.movieRes.Poster} alt=''></img>
            <br></br><h6>Rated ${this.state.movieRes.Rated}\nRelease Date: ${this.state.movieRes.Released}\nDirector: ${this.state.movieRes.Director}\n
            Written By: ${this.state.movieRes.Writer}</h6>\n${this.state.movieRes.Plot}`
            } else {
                resDiv.innerHTML = '<h6>No Results Found</h6>'
            }

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
            <div className='body search'>
                <Jumbo>
                <h1>Search for a Film</h1>
                
                <Inputs
                    name='movie'
                    onChange={this.handleChange}
                    value={this.state.movie} />
                <Btn onClick={this.getMovies}/>
                <div id='res-div' className='text-center'></div>
                </Jumbo>
                
                
                
                
            </div>
           
        );
    }
}


export default Search;