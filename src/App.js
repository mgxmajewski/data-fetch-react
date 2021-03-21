import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
import axios from "axios";

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
        gifs: []
    }
  }


  componentDidMount() {
    this.performSearch()
  }

  performSearch = (query = 'cats') => {
      axios.get(`https://api.giphy.com/v1/gifs/search?api_key=8kPPAvSPwZGTj0QyLzVO7ovMegXe79v5&q=${query}&limit=24&offset=0&rating=g&lang=en`)
          .then(response => {
              this.setState({ gifs: response.data.data })
          })
          .catch(error => {
              console.log('Error fetching and parsing data', error)
          })
}

    render() {
      console.log(this.state.gifs)
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch}/>
          </div>   
        </div>    
        <div className="main-content">
          <GifList data={this.state.gifs} />
        </div>
      </div>
    );
  }
}
