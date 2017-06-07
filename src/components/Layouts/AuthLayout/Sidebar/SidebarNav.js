import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveTab } from '../../../../actions/actions';

const mapStateToProps = state => {
  return {
    selectedPlaylist: state.selectedPlaylist,
    activeSidebarTab: state.ui.activeSidebarTab
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleTabSelect: data => {
      dispatch(setActiveTab(data));
    }
  };
};

class SidebarNav extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.props.handleTabSelect(e.target.id)
  }

  componentDidUpdate() {
    const smallWindow =
      this.props.mediaType === 'extraSmall' || this.props.mediaType === 'small';
    if (smallWindow) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const activeSidebarTab = this.props.activeSidebarTab;
    const selectedPlaylist = this.props.selectedPlaylist;

    //as appropriate, mark tabs as active or disabled
    const playlistsClasses = activeSidebarTab === 'playlists' ? 'active' : '';
    const filtersClasses =
      (activeSidebarTab === 'filters' ? 'active' : '') +
      (selectedPlaylist.id ? '' : ' disabled');
    const saveClasses =
      (activeSidebarTab === 'save' ? 'active' : '') +
      (selectedPlaylist.id ? '' : ' disabled');

    return (
      <div className="sidebar__nav">
        <ul className="nav nav-tabs nav-justified noselect">
          <li
            role="presentation"
            onClick={this.onClick}
            className={playlistsClasses}
          >
            <a id="tab-playlists">PLAYLISTS</a>
          </li>
          <li
            role="presentation"
            onClick={this.onClick}
            className={filtersClasses}
          >
            <a id="tab-filters">FILTERS</a>
          </li>
          <li
            role="presentation"
            onClick={this.onClick}
            className={saveClasses}
          >
            <a id="tab-save">SAVE...</a>
          </li>
        </ul>
      </div>
    );
  }
}

const SidebarNavContainer = connect(mapStateToProps, mapDispatchToProps)(
  SidebarNav
);

export default SidebarNavContainer;
