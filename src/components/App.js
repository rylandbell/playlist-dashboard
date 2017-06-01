import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getFilteredTracks} from '../selectors/filteredTracks';
import {getHashParams} from '../helper';
import {setAccessToken} from '../actions';
import {getPlaylists} from '../actions';

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
    authStatus: state.auth.authStatus,
    playlists: state.playlists,
    fetchStatus: state.fetchStatus,
    activeSidebarTab: state.ui.activeSidebarTab,
    badAuthToken: state.auth.badAuthToken,
    tracks: state.tracks,
    filteredTracks: getFilteredTracks(state)
  }
}

const mapDispatchToProps = (dispatch, accessToken) => {
  return {
    getPlaylists: () => dispatch(getPlaylists()),
    getAccessToken: () => {
      const params = getHashParams();
      let data = "";
      if (params && params.access_token) {
        data = params.access_token;
      }
      dispatch(setAccessToken(data));
    }
  }
}

class App extends Component {
  componentDidMount() {
    this.props.getAccessToken();
  }

  render() {
    return (
      <div className="App">
        {this.props.authStatus ? <AuthLayout {...this.props} /> : <PreAuthLayout /> }
      </div>
    );
  }
}
  

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer;