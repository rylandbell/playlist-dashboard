import React from 'react';
import { connect } from 'react-redux';
import fetchCalls from '../fetchCalls';

import './App.css';
import PreAuthLayout from './Layouts/PreAuthLayout/PreAuthLayout';
import AuthLayout from './Layouts/AuthLayout/AuthLayout';

//load AuthLayout as separate module, once authorization has been established
// class AuthLayout extends React.Component {
//   componentWillMount = () => {
//     import('./Layouts/AuthLayout/AuthLayout').then(Component => {
//       this.Component = Component;
//       this.forceUpdate();
//     })
//   }
//   render = () => (
//     this.Component && <this.Component.default {...this.props} />
//   )
// }

const mapStateToProps = (state) => {
  return {
    authStatus: state.authStatus,
    playlists: state.playlists,
    fetchStatus: state.fetchStatus,
    accessToken: state.accessToken,
    activeSidebarTab: state.activeSidebarTab,
    badAuthToken: state.badAuthToken,
    selectedPlaylistTracks: state.selectedPlaylistTracks,
    selectedPlaylistAudioFeatures: state.selectedPlaylistAudioFeatures,
    fullState: state
  }
}

const mapDispatchToProps = (dispatch, accessToken) => {
  return {
    getPlaylists: (accessToken) => {fetchCalls.getPlaylists(dispatch, accessToken)}
  }
}

const App = (props) => (
  <div className="App">
    {props.authStatus ? <AuthLayout {...props} /> : <PreAuthLayout /> }
  </div>
);

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer;