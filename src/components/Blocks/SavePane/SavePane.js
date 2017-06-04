import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeNameText } from '../../../actions/actions';
import { createPlaylist } from '../../../actions/api';

import './SavePane.css';
import Message from '../../blocks/Message/Message';

const mapStateToProps = state => {
  return {
    newPlaylistName: state.ui.newPlaylistName,
    fetchStatus: state.fetchStatus,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleNameTextEntry: data => dispatch(changeNameText(data)),
    handleSavePlaylist: (userId, newPlaylistName) => {
      dispatch(createPlaylist(userId, newPlaylistName));
    }
  };
};

class SavePane extends Component {
  constructor(props) {
    super(props);
    this.onClickSave = this.onClickSave.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  onClickSave() {
    this.props.handleSavePlaylist(
      this.props.userId,
      this.props.newPlaylistName
    );
  }

  onChangeText(e) {
    this.props.handleNameTextEntry(e.target.value);
  }

  render() {
    const newPlaylistName = this.props.newPlaylistName;
    const savePending =
      this.props.fetchStatus.createPlaylistPending ||
      this.props.fetchStatus.addTracksToPlaylistPending;
    const saveSuccess = this.props.fetchStatus.addTracksToPlaylistSuccess;
    const saveFailure =
      this.props.fetchStatus.createPlaylistFailure ||
      this.props.fetchStatus.addTracksToPlaylistFailure;

    return (
      <div className="save-pane">
        <div className="lead">
          Create a new Spotify playlist from the currently selected tracks.
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={newPlaylistName}
            onChange={this.onChangeText}
          />
        </div>
        <button
          onClick={this.onClickSave}
          className={
            'btn btn-primary pull-right ' + (savePending ? 'disabled' : '')
          }
        >
          Save
        </button>
        <br />
        {savePending &&
          <Message classList="" loading={true} text="Saving on Spotify... " />}
        {saveSuccess &&
          <Message
            classList=""
            success={true}
            text="Playlist successfully created.&nbsp;"
          />}
        {saveFailure &&
          <Message
            classList=""
            error={true}
            text="Error: Playlist was not saved.&nbsp;"
          />}
      </div>
    );
  }
}

const SavePaneContainer = connect(mapStateToProps, mapDispatchToProps)(
  SavePane
);

export default SavePaneContainer;
