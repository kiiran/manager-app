import _ from 'lodash';
import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import { textWithoutEncoding } from 'react-native-communications';
import { connect } from 'react-redux';
import {
  employeeUpdate,
  employeeSave,
  employeeDelete
} from '../actions';
import { Button, Card, CardSection, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onSaveButtonPress() {
    Keyboard.dismiss();
    const { name, phone, shift } = this.props;
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  }

  onMessageButtonPress() {
    const { phone, shift, name } = this.props;

    textWithoutEncoding(
      phone,
      `Hi, ${name}! This week, you'll be working on ${shift}. Try to be on time for once.`
    );
  }

  onFireButtonPress() {
    this.toggleModal();
  }

  onAccept() {
    const { uid } = this.props.employee;

    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.toggleModal();
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onSaveButtonPress.bind(this)}>
            Save changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onMessageButtonPress.bind(this)}>
            Send message
          </Button>
        </CardSection>
        <CardSection>
          <Button
            onPress={this.onFireButtonPress.bind(this)}
            style={{ backgroundColor: '#ff2e2e', borderColor: '#ff2e2e' }}
          >
            {`Fire ${this.props.name}`}
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.toggleModal.bind(this)}
        >
          {`Are you sure you want to fire ${this.props.name}?`}
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeSave, employeeDelete
})(EmployeeEdit);
