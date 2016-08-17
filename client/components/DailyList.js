import React, { Component } from 'react';

import { Link } from 'react-router';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { List } from 'material-ui/List';

import Activity from './Activity';

class DailyList extends Component {
  render() {
    const { addActivity, activities } = this.props;

    return (<div>

        <List>
          {activities.map(activity => <Activity key={activity.id} {...activity} />)}
        </List>

        <Link to="/add">
          <FloatingActionButton>
            <ContentAdd />
          </FloatingActionButton>
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
