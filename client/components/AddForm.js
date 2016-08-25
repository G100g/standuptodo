import React, { Component } from 'react';

import { Link, browserHistory } from 'react-router';

import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

import Button from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import DatePicker from 'react-toolbox/lib/date_picker';
import TimePicker from 'react-toolbox/lib/time_picker';

// import TimePicker from 'material-ui/TimePicker';
// import DatePicker from 'material-ui/DatePicker';

// const style = {
//   margin: 12,
// };

class AddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          title: '',
          time: new Date(),
          date: new Date(),
          canSubmit: false
        };
    }

    handleChange(item, value) {
      // let valid = this.validate();
      let canSubmit = true;
      this.setState({...this.state, [item]: value, canSubmit});
    }

    // validateEmptyInput(value) {
    //   return !/^\s*$/.test(value);
    // }
    //
    // validate() {
    //
    //   let valid = true;
    //
    //   console.log(this.validateEmptyInput(this.state.title));
    //
    //   if (this.validateEmptyInput(this.state.title) && valid === true) {
    //
    //     valid = false;
    //
    //   }
    //
    //   return valid;
    // }

    // getInitialState() {
    //   return {
    //     canSubmit: false
    //   }
    // }

    submit(model) {
      // someDep.saveEmail(model.email);
      console.log("Save")

      var datetime = new Date(this.state.date.getFullYear(), this.state.date.getMonth(), this.state.date.getDate(),
                              this.state.time.getHours(), this.state.time.getMinutes(), this.state.time.getSeconds());

      this.props.addActivity(this.state.title, datetime);
      // browserHistory.push('/');
    }

    render() {
      return (
                    <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
      <Card>
        <h1>Add</h1>

          <Input type='text' multiline label='What did you do in the last hour?' value={this.state.title} onChange={this.handleChange.bind(this, 'title')} />

          <DatePicker label='Event Date' onChange={this.handleChange.bind(this, 'date')} value={this.state.date} />

          <TimePicker
            label='Event time'
            onChange={this.handleChange.bind(this, 'time')}
            value={this.state.time}
          />

          <Button label="Save" raised primary disabled={!this.state.canSubmit} onClick={this.submit.bind(this)} />


          <Link to="/">
            <Button label="Close" flat/>
          </Link>

      </Card>
      </div>
    );
  }
}

export default AddForm;
