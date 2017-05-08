import React, { Component } from 'react';

class TracksTableRow extends Component {
  render() {
    const track = this.props.track;
    const features = this.props.features;
    const danceability = features ? features.danceability : 'N/A';
    const instrumentalness = features ? features.instrumentalness : 'N/A';
    const valence = features ? features.valence : 'N/A';
    
    return (
      <tr className="tracks__row" onClick={this.onClick}> 
        <td>{track.name}&nbsp;
          <small>{track.artists[0].name}</small>
        </td>
        <td>{danceability || '0'}</td>
        <td>{instrumentalness || '0'}</td>
        <td>{valence || '0'}</td>
      </tr>
    );
  }
}

export default TracksTableRow;