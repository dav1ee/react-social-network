import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { sidebar } from './sidebar';
import { profilePage } from './profilePage';
import { dialoguesPage } from './dialoguesPage';
import { usersPage } from './usersPage';
import { auth } from './auth';

export const rootReducer = combineReducers({
  sidebar,
  profilePage,
  dialoguesPage,
  usersPage,
  auth,
  form: formReducer,
});
