import React, { Component } from 'react';

import { Link } from 'react-router';

import { Button } from 'react-toolbox/lib/button';

import { List, ListSubHeader } from 'react-toolbox/lib/list';
import moment from 'moment';

import Activity from './Activity';
import AlertButton from './AlertButton';

const actionButton = {
  position: 'absolute',
  bottom: 25,
  right: 25,
};

class DailyList extends Component {

  render() {
    const { activities } = this.props;

    return (<div style={{ flex: 1, overflowY: 'auto' }}>

      <AlertButton {...this.props} />

      <List>
        {activities.sort((a, b) => {
          return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
        })
        .reduce((result, item) => {
          // need to split by day

          const date = moment(item.date);
          let lastDate = moment();
          const lastItem = result.length > 0 ? result[result.length - 1] : null;
          const lastIsHeader = (lastItem && lastItem.type && lastItem.type === 'header');

          if ((lastItem && !lastIsHeader)) {
            lastDate = moment(lastItem.item.date);
          }

          if (date.dayOfYear() !== lastDate.dayOfYear() && !lastIsHeader) {
            result.push(
              {
                type: 'header',
                item: {
                  id: date.toDate(),
                  title: date.format('dddd MMMM Do YYYY'),
                },
              });
          }

          result.push({ type: 'item', item });


          return result;
        }, [])
        .map(activity => {
          if (activity.type === 'header') {
            return <ListSubHeader key={activity.item.id} caption={activity.item.title} />;
          }
          return <Activity key={activity.item.id} {...activity.item} />;
        })}
      </List>

      <Link style={actionButton} to="/add">
        <Button icon="add" floating primary />
      </Link>
    </div>
    );
  }
}

export default DailyList;
