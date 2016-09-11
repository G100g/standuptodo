import React, { Component } from 'react';

import { Link, browserHistory } from 'react-router';

import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Navigation from 'react-toolbox/lib/navigation';

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

        // if (this.prop.param)
        console.log(props.params);

        this.state = {
          id: null,
          title: '',
          time: new Date(),
          date: new Date(),
          canSubmit: false
        };



    // }
    //
    // componentDidMount() {
      if (this.props.params && this.props.params.id) {
        // Popuplate form's state
        let { title, date, id } = this._getSingle(this.props.params.id, this.props);
        //
        // console.log(title, date, id);
        //
        this.state.id = id;
        this.state.title = title;
        this.state.date = date;
        this.state.time = date;
        this.state.canSubmit = true;

      }
    }

    _getSingle(id, props) {
      return props.activities
                          .filter((item) => {
                            console.log(item)
                            return (item.id === id);
                          })
                          .map((item) => {

                            item.date = new Date(item.date);

                            item.time = item.date;
                            return item;
                          })
                          .reduce((p, c) => {
                            return c;
                          });
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
      var datetime = new Date(this.state.date.getFullYear(), this.state.date.getMonth(), this.state.date.getDate(),
                              this.state.time.getHours(), this.state.time.getMinutes(), this.state.time.getSeconds());

      if (this.state.id !== null) {
        this.props.saveActivity(this.state.id, this.state.title, datetime);
      } else {
        this.props.addActivity(this.state.title, datetime);
      }


      // browserHistory.push('/');
    }

    deleteActivity() {

      this.props.deleteActivity(this.state.id);

    }

    render() {
      return (
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>

          <Input type='text' multiline label='What did you do in the last hour?' value={this.state.title} onChange={this.handleChange.bind(this, 'title')} />

          <DatePicker label='Event Date' onChange={this.handleChange.bind(this, 'date')} value={this.state.date} />

          <TimePicker
            label='Event time'
            onChange={this.handleChange.bind(this, 'time')}
            value={this.state.time}
          />

          <Navigation>

            <Button label="Save" raised primary disabled={!this.state.canSubmit} onClick={this.submit.bind(this)} />


            <Link to="/">
              <Button label="Close" flat/>
            </Link>

            <Button label="Delete" icon="delete" disabled={!this.state.id} raised onClick={this.deleteActivity.bind(this)} />
          </Navigation>
      </div>
    );
  }
}

export default AddForm;
