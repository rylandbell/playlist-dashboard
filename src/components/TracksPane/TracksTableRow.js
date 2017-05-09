import React, { Component } from 'react';

class TracksTableRow extends Component {
  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
  }

  onMouseEnter() {
    this.props.handleTrackRowHover(this.props.track);
  }

  render() {
    const track = this.props.track.track;
    const features = this.props.features;
    const danceability = features ? features.danceability : 'N/A';
    const instrumentalness = features ? features.instrumentalness : 'N/A';
    const valence = features ? features.valence : 'N/A';
    
    return (
      <tr className="tracks__row" onMouseEnter={this.onMouseEnter}> 
        <td>{track.name}&nbsp;
          <small>{track.artists[0].name}</small>
        </td>
        <td className="text-right">{danceability || '0'}</td>
        <td className="text-right">{instrumentalness || '0'}</td>
        <td className="text-right">{valence || '0'}</td>
      </tr>
    );
  }
}

export default TracksTableRow;