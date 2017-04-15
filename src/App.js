import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import GifImage from './components/GifImage';
import GifList from './components/GifList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        wshost:'127.0.0.1',
        wsport:8088
    };
    this.changeHost = this.changeHost.bind(this);
    this.changePort = this.changePort.bind(this);
  }
  submit = (e) => {
    e.preventDefault();
    console.log('h:' + this.state.wshost + ' p:'+this.state.wsport);
    window.socket = new WebSocket('ws://' + this.state.wshost + ':' + this.state.wsport);
  }
  changeHost(e) {
    console.log('h:'+this.state.wshost);
    console.log('v:'+e.target.value);
    this.setState({wshost: e.target.value});
    console.log('h:'+this.state.wshost);
 }
  changePort(e) {
    console.log('h:'+this.state.wsport);
    console.log('v:'+e.target.value);
    this.setState({wsport: e.target.value});
    console.log('h:'+this.state.wsport);
  }
  render() {
    return (
        <MuiThemeProvider  muiTheme={getMuiTheme(darkBaseTheme)}>
          <div className="container">
            <AppBar 
              title="selfberry" 
              iconClassNameRight="muidocs-icon-navigation-expand-more" 
              showMenuIconButton={false} />
            <div className="row">
              <div className="col s12 m7"><GifImage /></div>
              <div className="col s12 m5"><GifList /></div>
            </div>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
