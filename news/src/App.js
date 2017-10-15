import React, {Component} from 'react';
import ReactRouter from 'react-router';
import Search from './components/Search/Search.js'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Search />
      </div>
    );
  }
}

export default App;
