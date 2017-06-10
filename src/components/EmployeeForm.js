import React, { Component } from 'react';
import { Keyboard, Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';


class EmployeeForm extends Component {
  onChange(value) {
    Keyboard.dismiss();
    this.props.employeeUpdate({ prop: 'shift', value });
  }

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Itsa Thatguy"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            keyboardType='numeric'
            label="Phone"
            placeholder="+351912345678"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column', paddingTop: 20, paddingBottom: 20 }}>
          <Text style={styles.pickerTextStyle}>Select a shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.onChange(value)}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingBottom: 10,
    textAlign: 'center'
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
