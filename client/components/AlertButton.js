import React from 'react';
import Switch from 'react-toolbox/lib/switch';
import {Button} from 'react-toolbox/lib/button';

export default class AlertButton extends React.Component {

  constructor(props) {
    super(props);
    this.setReminder = this.setReminder.bind(this);
  }

  setReminder() {

    this.props.addNotification();

  }

  render() {

    console.log(this.props);

    let { notifications } = this.props;
    let infosView;
    if (notifications.active) {
       infosView = <div>
                      Next reminder happen in { notifications.active }
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
