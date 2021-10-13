import React, { Component } from 'react';

export default class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      query: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.queryGif(this.state.query)
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input onChange={this.handleChange}></input>
      </form >
    )
  }
}