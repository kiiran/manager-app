import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  STARTING_LOGIN,
  SUCCESSFULLY_LOGGED_IN,
  LOGIN_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case EMAIL_CHANGED:
        return { ...state, email: action.payload };
      case PASSWORD_CHANGED:
        return { ...state, password: action.payload };
      case STARTING_LOGIN:
        return { ...state, loading: true, error: '' };
      case SUCCESSFULLY_LOGGED_IN:
        return { ...state, loading: false, user: action.payload, error: '' };
      case LOGIN_FAILED:
        return { ...state, loading: false, error: 'Sign-in/sign-up failed', password: '' };
      default:
        return state;
    }
};
