import {
  EMPLOYEE_UPDATE
} from './types';

export const employeeDetails = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};
