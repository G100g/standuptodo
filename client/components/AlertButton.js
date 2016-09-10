import React from 'react';
import Switch from 'react-toolbox/lib/switch';
import {Button} from 'react-toolbox/lib/button';

import moment from 'moment';

export default class AlertButton extends React.Component {

  constructor(props) {
    super(props);
    this.setReminder = this.setReminder.bind(this);


  }

  componentDidMount() {
    console.log('mont');
    this.props.getNotiticationObject();
  }

  setReminder() {

    this.props.setNotitication();

  }

  render() {

    let { notifications } = this.props;
    let infosView;
    if (notifications.next) {
       infosView = <div>
                      Next reminder happen at { moment(notifications.next).format('H:mm:ss') }
                    </div>;
    } else {
      infosView = <div>
                      No reminder sets
                  </div>;
    }

    return (
      <div>
        {infosView}
        <Button label="Set Reminder"  disabled={!notifications.available} onClick={this.setReminder} />
      </div>


    );
  }

};
