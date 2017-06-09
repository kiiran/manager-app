import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 62 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Log In" />
      </Scene>
      <Scene key="main">
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          initial
        />
        <Scene key="employeeCreate" component={EmployeeCreate} title="Add an employee" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
