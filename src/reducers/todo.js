import * as actionTypes from '../action-types'
 const initialState = {
   name: [9,0],
   users: [],
 }
const getVisibleTodos = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.STORE_DATA:
        state[action.payload.type] = action.payload.value
        return {...state};
      case actionTypes.GET_USERS:
        state.users = action.payload;
        return {...state};
      case actionTypes.GET_USERS_BY_ID:
        state.user = action.payload;
        state.auth = true;
        return {...state};
      case actionTypes.LOGIN_FAILED:
        if (!action.payload) {
          state.loginFailed = 'login failed';
        } else {
          state.email = '';
          state.password = '';
          state.auth = false;
        }
        return {...state};
        default:
        return state;
    }
  }

  export default getVisibleTodos;