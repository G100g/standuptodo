import React from 'react';
import moment from 'moment';
import { browserHistory } from 'react-router';

import { ListItem } from 'react-toolbox/lib/list';

const Activity = ({ title, date, id }) => {

  function onClickSingle(id) {
    browserHistory.push('/edit/'+id);
  }

  return (
    <ListItem caption={title} legend={moment(date).fromNow()} onClick={onClickSingle.bind(null, id)} />
  );
};

export default Activity;
