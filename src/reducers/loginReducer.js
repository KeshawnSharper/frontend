import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions';

const initialState = {
  users: [],
  isLogging: false,
  error: ''
};

export const loginReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        isLogging: true,
        error: ''
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogging: false,
        error: '',
        users: payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLogging: false,
        error: payload
      };
    default:
      return state;
  }
};