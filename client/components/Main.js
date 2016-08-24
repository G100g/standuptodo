import React from 'react';
// import FlatButton from 'material-ui/FlatButton';
// import TextField from 'material-ui/TextField';

import { AppBar, Checkbox, IconButton } from 'react-toolbox';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';


const Main = (props) => {
  return {

    render() {
      return (<div>
{/*
      <Layout>
      <Panel>
            <AppBar><IconButton icon="menu" inverse onClick={this.toggleDrawerActive} /></AppBar>
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
            </div>
        </Panel>
    </Layout>);*/}
    {/* We use cloneElement here so we can auto pass down props */}
    {React.cloneElement(props.children, props)}
    </div>)
    },
    toggleDrawerActive() {

    },
  };
};

export default Main;
