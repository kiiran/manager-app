import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Button, Card, CardSection } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    Keyboard.dismiss();
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Add employee
          </Button>
        </CardSection>
      </Card>
    );
  }
}


const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
})(EmployeeCreate);
