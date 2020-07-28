import {STORE_DATA, GET_USERS, GET_USERS_BY_ID, LOGIN_FAILED} from '../action-types';

export const storeData = ((value) => ({type: STORE_DATA, payload: value}));
export const getUsers = ((value) => ({type: GET_USERS, payload: value}));
export const getUsersById = ((value) => ({type: GET_USERS_BY_ID, payload: value}));
export const loginFailed = ((value) => ({type: LOGIN_FAILED, payload: value}));