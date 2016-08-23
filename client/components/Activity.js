import React from 'react';

import { ListItem } from 'react-toolbox/lib/list';

const Activity = ({ title }) => {
  return (
    <ListItem caption={title} />
  );
};

export default Activity;
