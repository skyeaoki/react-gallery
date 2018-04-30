import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '.../config';

// Import components
import SearchForm from './SearchForm';
import PhotoContainer from './PhotoContainer';

class Container extends Component {

  // Initial application state
  constructor() {
    super();
    this.state = {
      photos: [],
      keyword: '',
      loading: true
    };
  }

  // On page load perform search using url parameters as query
  componentWillReceiveProps(nextProps) {
    this.performSearch(nextProps.match.params.keyword);
  }

  componentDidMount() {
    this.performSearch(this.props.match.params.keyword);
  }

  // Search for photos
  performSearch = (query = 'magnolias') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&sort=interestingness-desc&per_page=16&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
         photos: response.data.photos.photo,
         keyword: query,
         loading: false
        });

      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div className="container">
      { // display search form only if the pathname starts with '/search', otherwise display a search button)
        (window.location.pathname.startsWith('/search')) ?
        <SearchForm onSearch={this.performSearch} keyword={this.state.keyword}/>
        : <a href="/search"><button className="search-button" >Search</button></a>
      }
      { // display a loading indicator while data is being fetched
        (this.state.loading)
        ? <p> Loading...</p>
        : <PhotoContainer data={this.state.photos} />
      }
      </div>
    );
  }

}

export default Container;
