import React from 'react';

import {ListItem} from 'material-ui/List';

const Activity = ({ title }) => {
  return (
    <ListItem primaryText={title} />
  );
};

export default Activity;
