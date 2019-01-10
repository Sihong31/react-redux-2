import axios from 'axios';

import * as actionTypes from './actionTypes';

// authStart will essentially set up some loading/initial state
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId
  }
}

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    }
    const apiKey = 'AIzaSyDToAVvO2Ae8jN0k1VlA4nO7xIDHCMs9KA';
    let url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${apiKey}`
    if (!isSignup) {
      url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${apiKey}`
    }
    axios.post(
      url, 
      authData)
        .then(response => {
          console.log(response);
          dispatch(authSuccess(response.data.idToken, response.data.localId));
        })
        .catch(err => {
          console.log(err);
          dispatch(authFail(err.response.data.error));
        })
  }
}