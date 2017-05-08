import React, { Component } from 'react';

class TracksTableRow extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onClick = this.onClick.bind(this);
  // }

  // onClick() {
  //   this.props.handlePlaylistSelect(this.props.playlist);
  // }

  render() {
    const track = this.props.track;
    const features = this.props.features;
    const danceability = features ? features.danceability : 'N/A';
    const instrumentalness = features ? features.instrumentalness : 'N/A';
    
    return (
      <tr className="tracks__row" onClick={this.onClick}> 
        <td>{track.name}</td>
        <td>{danceability || '0'}</td>
        <td>{instrumentalness || '0'}</td>
      </tr>
    );
  }
}

export default TracksTableRow;