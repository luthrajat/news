import React, { Component } from 'react';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class News extends React.Component {

  constructor(props) {
      super(props);
      this.state = {items: []};
  }

  componentDidMount() {
    axios
    .get(`http://localhost:4999/product/${this.props.match.params.id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({ items: res.data })
      console.log(this.state)
    })
    .catch(err => console.log(err))
  }

  componentWillUnmount() {
  }

  render() {
      return(
        <div>
          Product Details: {this.state.item}
          Name: {this.state.items.name}
          ID: {this.state.items.name}
        </div>
      )
  }
}
