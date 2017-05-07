import React, { Component } from 'react';
import './ShowListsView.css';
// import fetch from 'whatwg-fetch';

class ShowListsView extends Component {
  componentDidMount() {
    this.props.getPlaylists();
  }

  render() {
    return (
      <div className="ShowListsView">
        <h3>Choose a playlist to filter.</h3>
        <p> For now, only your top 50 playlists (as shown in Spotify's playlist's list) are available. </p>
        <ul className="list-group">
          {this.props.reduxState.playlists.map(list => 
            <li key={list.id} className="list-group-item"> {list.name} </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ShowListsView;