import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

export default class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      query: "smile",
      gifs: []
    }
  }

  componentDidMount() {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
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
        <GifSearch />
      </div>
    )
  }
}