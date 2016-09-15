import React from 'react';
import Switch from 'react-toolbox/lib/switch';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import Navigation from 'react-toolbox/lib/navigation';

import moment from 'moment';

export default class AlertButton extends React.Component {

  constructor(props) {
    super(props);
    this.setReminder = this.setReminder.bind(this);
    this.clearReminder = this.clearReminder.bind(this);

    this.state = { minutes: 60 };

  }

  componentDidMount() {
    console.log('mont');
    this.props.getNotiticationObject();
  }

  setReminder() {
    this.props.setNotitication(this.state.minutes);
  }

  clearReminder() {
    this.props.clearNotitication();
  }

  handleChange(name, value) {
    this.setState({...this.state, [name]: value});
  }

  render() {
    let { notifications } = this.props;
    let infosView;
    if (notifications.next) {
      infosView = (<div>
                      Next reminder happen at {moment(notifications.next).format('H:mm:ss')}
                    </div>);
    } else {
      infosView = (<div>
                      No reminder sets
                  </div>);
    }

    return (
      <div style={{textAlign: 'center'}}>
        <div style={{ padding: '1.8rem 1.8rem 0'}}>{infosView}</div>
        <Navigation type='horizontal'>
          <Button label="Clear" disabled={!notifications.available} onClick={this.clearReminder} /> <Button icon='add_alert' label="Set Reminder" disabled={!notifications.available} onClick={this.setReminder} raised primary />
          <div style={{display: 'inline-block', width: '50px', marginLeft: '1.5rem'}}>
            <Input  type='number' label='Minutes' name='minutes' value={this.state.minutes} onChange={this.handleChange.bind(this, 'minutes')} />
          </div>
        </Navigation>
      </div>


    );
  }

}
