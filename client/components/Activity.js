import React from 'react';
import moment from 'moment';

import { ListItem } from 'react-toolbox/lib/list';

const Activity = ({ title, date }) => {
  return (
    <ListItem caption={title} legend={moment(date).fromNow()} />
  );
};

export default Activity;
