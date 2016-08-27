import React, { Component } from 'react';
// import FlatButton from 'material-ui/FlatButton';
// import TextField from 'material-ui/TextField';
import { Link, browserHistory } from 'react-router';
import { Router, Route, IndexRoute } from 'react-router';
import { AppBar, Checkbox, IconButton } from 'react-toolbox';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  toggleDrawerActive() {
    console.log('Ciao');
  }

  render() {
    return (
        <Layout>
          <Panel>
            <AppBar>
{this.props.nav}
            </AppBar>
            {/* We use cloneElement here so we can auto pass down props */}
            {React.cloneElement(this.props.main, this.props)}
          </Panel>
        </Layout>);
  }
}

export default Main;
