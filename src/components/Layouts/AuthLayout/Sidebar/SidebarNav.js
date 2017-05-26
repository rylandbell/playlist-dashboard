import React, { Component } from 'react';

class SidebarNav extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const selectedPlaylist = this.props.reduxState.selectedPlaylist;

    //don't change tabs when clicked tab is disabled (i.e., when no selected playlist): 
    const validChange = (e.target.id === "tab-playlists") || selectedPlaylist;
    if (validChange) {
      this.props.handleTabSelect(e.target.id);      
    }
  }

  render() {
    const activeSidebarTab = this.props.reduxState.activeSidebarTab;
    const selectedPlaylist = this.props.reduxState.selectedPlaylist;

    //as appropriate, mark tabs as active or disabled
    const playlistsClasses = (activeSidebarTab === "playlists" ? 'active': '');  
    const filtersClasses = (activeSidebarTab === "filters" ? 'active': '')
      + (selectedPlaylist ? '' : ' disabled');
    const saveClasses = (activeSidebarTab === "save" ? 'active': '')
      + (selectedPlaylist ? '' : ' disabled');

    return (
      <div className="sidebar__nav">
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

export default SidebarNav;