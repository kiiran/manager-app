import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Spinner } from './common';

class EmployeeCreate extends Component {


  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Itsa Thatguy"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="+351912345678"
          />
        </CardSection>

        <CardSection>
          <Button>
            Add
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
