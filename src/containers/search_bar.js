import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }

    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  render() {
    return (
      <form style={searchStyle} className='input-group'>
        <input
          placeholder='Get a five-day forecast in your favorite city'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className='input-group-button'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

const searchStyle = {
  display: 'flex'
}
