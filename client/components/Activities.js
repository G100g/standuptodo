import React from 'react';
import Activity from './Activity';
import { List } from 'material-ui/List';

const Activities = (activities) => {
  return (
    <div>
      <List>
        {activities.map(activity => <Activity key={activity.id} {...activity} />)}
      </List>
    </div>
  );
};

export default Activities;
