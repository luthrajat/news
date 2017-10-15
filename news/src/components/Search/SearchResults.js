import React, {Component} from 'react';
import axios from 'axios';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

var styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
     width: "90%",
    // height: 450,
  },
};

export default class SearchResults extends React.Component {

  constructor(props) {
    super(props);
    console.log(`Rajat - ${this.props.results}`);
  }

  componentDidMount() {
        console.log(`RajatL - ${this.props.results}`);
        console.log(`RajatL2 - ${this.props.results.docs}`);

  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div style={styles.root}>
        {this.props}
        <GridList
          cellHeight={180}
          cols={5}
          style={styles.gridList} >
          <Subheader>Saved Articals</Subheader>
          {this.props.results.map((item, index) => (
            <Link to={`/news/${item._id}`}>
              <GridTile
                key={item._id}
                title={item.title}
                subtitle={<span>by <b>{item.saved}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
                <p>{item.url}</p>
              </GridTile>
            </Link>
          ))}
        </GridList>
      </div>
    )
  }
}
