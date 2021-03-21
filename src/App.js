import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
        gifs: []
    }
  } 

  componentDidMount() {
      fetch('https://api.giphy.com/v1/gifs/trending?api_key=8kPPAvSPwZGTj0QyLzVO7ovMegXe79v5&limit=25&rating=G')
          .then(response => response.json())
          .then(responseData => {
              this.setState({ gifs: responseData.data })
          })
          .catch(err => {
              console.log('Error fetching gifs', err)
              }
          )
  }

    render() {
      console.log(this.state.gifs)
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm />      
          </div>   
        </div>    
        <div className="main-content">
          <GifList />
        </div>
      </div>
    );
  }
}
