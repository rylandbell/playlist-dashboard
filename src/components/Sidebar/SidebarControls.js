import React, { Component } from 'react';

class SidebarControls extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const selectedPlaylist = this.props.reduxState.selectedPlaylist;

    //don't change tabs when clicked tab is disabled: 
    const validChange = (e.target.id === "tab-playlists") || selectedPlaylist;
    if (validChange) {
      this.props.handleTabSelect(e.target.id);      
    }
  }

  render() {
    const activeTab = this.props.reduxState.activeTab;
    const selectedPlaylist = this.props.reduxState.selectedPlaylist;

    const playlistsClasses = (activeTab === "playlists" ? 'active': '');
    
    const filtersClasses = (activeTab === "filters" ? 'active': '')
      + (selectedPlaylist ? '' : ' disabled');
    
    const saveClasses = (activeTab === "save" ? 'active': '')
      + (selectedPlaylist ? '' : ' disabled');

    return (
      <div className="sidebar__controls">
        <ul className="nav nav-tabs nav-justified noselect">
          <li role="presentation" onClick={this.onClick} className={playlistsClasses}>
            <a id="tab-playlists">PLAYLISTS</a>
          </li>
          <li role="presentation" onClick={this.onClick} className={filtersClasses}>
            <a id="tab-filters">FILTERS</a>
          </li>
          <li role="presentation" onClick={this.onClick} className={saveClasses}>
            <a id="tab-save">SAVE...</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SidebarControls;