import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  STARTING_LOGIN,
  SUCCESSFULLY_LOGGED_IN,
  LOGIN_FAILED
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: STARTING_LOGIN });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => successfullyLoggedIn(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => successfullyLoggedIn(dispatch, user))
          .catch(() => loginFailed(dispatch));
      });
  };
};

const loginFailed = (dispatch) => {
  dispatch({ type: LOGIN_FAILED });
};

const successfullyLoggedIn = (dispatch, user) => {
  dispatch({
    type: SUCCESSFULLY_LOGGED_IN,
    payload: user
  });

  Actions.main();
};
