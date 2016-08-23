import React, { Component } from 'react';
import { Link } from 'react-router';

import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

import Button from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import DatePicker from 'react-toolbox/lib/date_picker';

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
          date: new Date(),
        };
    }

    onTap() {
      this.props.addActivity(this.state.title);
    }

    handleChange(item, value) {
      this.setState({...this.state, [item]: value});
    }

    render() {
      return (
      <Card>
        <h1>Add</h1>

        <Input type='text' multiline label='What did you do in the last hour?' value={this.state.title} onChange={this.handleChange.bind(this, 'title')} />

        <DatePicker label='Date' onChange={this.handleChange.bind(this, 'date')} value={this.state.date} />

        <Button label="Save" raised primary onClick={this.onTap.bind(this)} />

        <Link to="/">
          <Button label="Close" flat/>
        </Link>
      </Card>
    );
  }
}

export default AddForm;
