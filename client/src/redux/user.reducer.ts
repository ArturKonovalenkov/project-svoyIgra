import { AnyAction } from '@reduxjs/toolkit';
import { IUser } from './types/state';
import { USER, LOGOUT_USER} from './type.redux';

const initialState: IUser = {
  user: {login: '', id: 0},
  authUser: false
};

const UserReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case USER:
      return { ...state, user : {...state.user, login: payload.login, id: payload.id }, authUser:true };
    default:
      return state;
  }
};

export default UserReducer;
