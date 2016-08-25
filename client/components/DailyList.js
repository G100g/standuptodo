import React, { Component } from 'react';

import { Link } from 'react-router';

import { Button } from 'react-toolbox/lib/button';

import { List } from 'react-toolbox/lib/list';

import Activity from './Activity';

class DailyList extends Component {

  render() {
    const { activities } = this.props;

    return (<div>

      <List>
        {activities.sort((a, b) => {
          return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
        })
        .map(activity => <Activity key={activity.id} {...activity} />)}
      </List>

      <Link to="/add">
        <Button icon="add" floating />
      </Link>
    </div>
    );
  }
}

export default DailyList;
