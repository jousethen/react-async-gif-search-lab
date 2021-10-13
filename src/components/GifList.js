import React, { Component } from 'react';

export default class GifList extends Component {


  renderGifs = () => {
    return this.props.gifs.map(e => {
      return <li key={e.id}><img src={e.images.original.url} alt={e.title} /></li>
    });

  }

  render() {
    return (
      <div>
        <ul>
          {this.renderGifs()}
        </ul>
      </div>
    )
  }
}