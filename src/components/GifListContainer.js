import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

export default class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      gifs: []
    }
  }

  queryGif = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then((response) => response.json())
      .then((data) => {
        let results = data.data.slice(0, 3);
        console.log(results)
        this.setState({
          gifs: results
        });
      });
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch queryGif={this.queryGif} />
      </div>
    )
  }
}