import { combineReducers } from 'redux';
import userReducer from 'services/reducers/user/userSlice';
import modalReducer from 'services/reducers/modal/modalSlice';

export default combineReducers({
  user: userReducer,
  modal: modalReducer,
});
