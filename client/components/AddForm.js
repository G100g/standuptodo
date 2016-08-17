import React from 'react';
import { Link } from 'react-router';

import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';

const style = {
  margin: 12,
};

const AddForm = ({ addActivity }) => {
  let val = '';
  let currentDate = new Date();

  return {

    handleChangeTimePicker24(event, date) {
      // this.setState({value24: date});
    },

    onTap() {
      addActivity(val);
    },

    onChange(e) {
      val = e.target.value;
    },

    render() {
      return (
      <Card style={style}>
        <h1>Add</h1>

        <TextField
          fullWidth
          hintText="What did you do in the last hour?"
          multiLine
          rows={2}
          rowsMax={4}
          onChange={this.onChange}

        />

        <TimePicker
          format="24hr"
          hintText="24hr Format"
          defaultTime={currentDate}
          onChange={this.handleChangeTimePicker24}
        />

        <DatePicker hintText="Event Date" autoOk defaultDate={currentDate} />

        <RaisedButton label="Save" primary style={style} onTouchTap={this.onTap} />

        <Link to="/">
          <RaisedButton label="Close" style={style} />
        </Link>
      </Card>
    );
    },
  };
};

export default AddForm;
