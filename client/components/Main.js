import React from 'react';
// import FlatButton from 'material-ui/FlatButton';
// import TextField from 'material-ui/TextField';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


const Main = (props) => {
  return (
    <div>

      <AppBar
        title={<span>Stand Up To Do</span>}
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        // iconElementRight={<FlatButton label="Save" />}
      />


      {/* We use cloneElement here so we can auto pass down props */}
        {React.cloneElement(props.children, props)}

    </div>
  );
};

export default Main;
