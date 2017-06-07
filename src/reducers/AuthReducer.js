import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SUCCESSFULLY_LOGGED_IN,
  LOGIN_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case EMAIL_CHANGED:
        return { ...state, email: action.payload };
      case PASSWORD_CHANGED:
        return { ...state, password: action.payload };
      case SUCCESSFULLY_LOGGED_IN:
        return { ...state, user: action.payload, error: '' };
      case LOGIN_FAILED:
        return { ...state, error: 'Sign-in/sign-up failed', password: '' };
      default:
        return state;
    }
};
