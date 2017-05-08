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

    return (
      <tr className="tracks__row" onClick={this.onClick}> 
        <td>{track.name}</td>
      </tr>
    );
  }
}

export default TracksTableRow;