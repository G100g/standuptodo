import React, { Component } from 'react';

import { Link } from 'react-router';

import {Button, IconButton} from 'react-toolbox/lib/button';

import { List } from 'react-toolbox/lib/list';

import Activity from './Activity';

class DailyList extends Component {
  render() {
    const { addActivity, activities } = this.props;

    return (<div>

        <List>
          {activities.map(activity => <Activity key={activity.id} {...activity} />)}
        </List>

        <Link to="/add">
          <Button icon='add' floating />
        </Link>
      </div>
    );
  }
}

// let DailyList = (props) => {
//   return {
//     render() {
//         const { addActivity, activities } = props;
//
//         return (<div>
//             <FloatingActionButton onClick={addActivity}>
//               <ContentAdd />
//             </FloatingActionButton>
//
//             <List>
//               {activities.map(activity => <Activity key={activity.id} {...activity} />)}
//             </List>
//           </div>
//         );
//       }
//   }
// };

export default DailyList;
