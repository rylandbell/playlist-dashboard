import React, { Component } from 'react';
// import DanceFilter from './DanceFilter';
// import InstrumentalFilter from './InstrumentalFilter';
import FilterInput from './FilterInput';

import './FiltersPane.css';
import 'rc-slider/assets/index.css';

const filters = [
  {
    name: 'Danceability',
    min: 0,
    max: 1
  },
  {
    name: 'Instrumental',
    min: 0,
    max: 1
  }
]

class FiltersPane extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.handlePlaylistSelect(null);
  }

  render() {
    return (
      <div className="filters__pane">
        <div className="filters__filters">
          <h4>{this.props.reduxState.selectedPlaylist.name}</h4>
          <button onClick={this.onClick} className="btn btn-primary btn-sm">Change Playlist</button>
          <hr />
          {filters.map((filter,index) => <FilterInput key={index} options={filter} {...this.props} />)}
        </div>
      </div>
    );
  }
}

export default FiltersPane;