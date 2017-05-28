import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchCalls from '../../../fetchCalls';
import { changeNameText } from '../../../actions';

import './SavePane.css';
import Message from '../../Blocks/Message/Message';

const mapStateToProps = (state) => {
  return {
    newPlaylistName: state.newPlaylistName,
    fetchStatus: state.fetchStatus,
    accessToken: state.accessToken,
    userId: state.userId,
    fullState: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleNameTextEntry: data => {dispatch(changeNameText(data))},
    handleSavePlaylist: (accessToken, userId, name, fullState) => {
      fetchCalls.handleSavePlaylist(dispatch, accessToken, userId, name, fullState)}
  }
}

class SavePane extends Component {
  constructor(props) {
    super(props);
    this.onClickSave = this.onClickSave.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  onClickSave() {
    const newPlaylistName = this.props.newPlaylistName;
    const savePending = this.props.fetchStatus.createPlaylistPending || this.props.fetchStatus.addTracksToPlaylistPending;
    if (savePending) {
      return;
    }
    this.props.handleSavePlaylist(this.props.accessToken, this.props.userId, newPlaylistName, this.props.fullState);
  }

  onChangeText(e) {
    this.props.handleNameTextEntry(e.target.value);
  }

  render() {
    const newPlaylistName = this.props.newPlaylistName;
    const savePending = this.props.fetchStatus.createPlaylistPending || this.props.fetchStatus.addTracksToPlaylistPending;
    const saveSuccess = this.props.fetchStatus.addTracksToPlaylistSuccess;
    const saveFailure = this.props.fetchStatus.createPlaylistFailure || this.props.fetchStatus.addTracksToPlaylistFailure;

    return (
      <div className="save-pane">
        <div className="lead">Create a new Spotify playlist from the currently selected tracks.</div>
        <div className="form-group">
          <input type="text" className="form-control" value={newPlaylistName} onChange={this.onChangeText} />
        </div>
        <button onClick={this.onClickSave} className={"btn btn-primary pull-right " + (savePending ? 'disabled' : '')} >Save</button>
        <br />
        {savePending && <Message classList="" loading={true} text="Saving on Spotify... " />}
        {saveSuccess && <Message classList="" success={true} text="Playlist successfully created.&nbsp;"  />}
        {saveFailure && <Message classList="" error={true} text="Error: Playlist was not saved.&nbsp;" />}
      </div>
    );
  }
}

const SavePaneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SavePane)

export default SavePaneContainer;