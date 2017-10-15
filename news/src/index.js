import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import Saved from './components/Saved/Saved.js';
import News from './components/News/News.js';

import MyNavbar from './components/MyNavbar/MyNavbar.js';
import Footer from './components/Footer/Footer.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Add Theme
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import TitleBar from './components/PageLayout/TitleBar.js'

import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch
} from 'react-router-dom'

class MainArea extends Component {
  render() {
    return(
    <div className="bootstrap-main">
      {this.props.children}
    </div>
    )
  }
}

const WebApplication = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Router>
      <div>
        <TitleBar />
        <MainArea>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/saved" component={Saved}/>
            <Route path="/news/:id" componet={News}/>
          </Switch>
        </MainArea>
        <Footer />
      </div>
    </Router>
  </MuiThemeProvider>
);


ReactDOM.render(
  <WebApplication />
,
  document.getElementById('root')
)
// registerServiceWorker();
