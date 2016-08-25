import React, { Component } from 'react';
// import FlatButton from 'material-ui/FlatButton';
// import TextField from 'material-ui/TextField';

import { AppBar, Checkbox, IconButton } from 'react-toolbox';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';

class Main extends Component {

    constructor(props) {
      super(props)
    }

    toggleDrawerActive() {
      console.log("Ciao")
    }

    render() {
      return (
        <Layout>
          <Panel>
            <AppBar><IconButton icon="menu" inverse onClick={this.toggleDrawerActive} /></AppBar>
            {/* We use cloneElement here so we can auto pass down props */}
            {React.cloneElement(this.props.children, this.props)}
          </Panel>
        </Layout>);
    }
};

export default Main;
