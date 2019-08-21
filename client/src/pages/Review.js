import React, { Component } from 'react';
import Jumbo from '../components/Jumbotron';
import Btn from '../components/Button';
import { Review, Dropdown } from '../components/Review';

const revFilm = localStorage.getItem('film');



class ReviewPage extends Component {

    state = {
        rating: [],
        review: []
    };
    
    componentDidMount() {
        this.setState({film: revFilm})
    }

    handleChange = e => {
        console.log(e);
        console.log(e.target);
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        this.setState({ [name]: value });
      };

      submitReview = e => {
          const payload = {
              user: 'Ben',
              filmName: this.state.film,
              score: parseInt(this.state.rating),
              review: this.state.review
          }
          console.log(payload);
      }

    render() {
        return (
            <div className='body'>
                <Jumbo className='home'>
                <h2 id='review-header'>Write a Review for {this.state.film}</h2>

                <Dropdown name='rating'
                onChange={this.handleChange}
                value={this.state.rating}/>
                <Review 
                name='review'
                onChange={this.handleChange}
                value={this.state.review}
                />
                <Btn onClick={this.submitReview} />
                </Jumbo>
                
            </div>
           
        )
    }
}


export default ReviewPage;