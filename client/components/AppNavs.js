import React, { Component } from 'react';
// import FlatButton from 'material-ui/FlatButton';
// import TextField from 'material-ui/TextField';
import { Link, browserHistory } from 'react-router';
import { Router, Route, IndexRoute } from 'react-router';
import { AppBar, Checkbox, IconButton } from 'react-toolbox';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';

export const MainNav = () => {

      return (<div>
              <Link to="/"><IconButton icon="menu" inverse /></Link>               Stand Up To Do
              </div>
            );
};

export const AddNav = () => {

      return (<div>
              <Link to="/"><IconButton icon="arrow_back" inverse  /></Link>               Stand Up To Do
              </div>
            );
};
