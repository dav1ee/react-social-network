import { combineReducers } from 'redux';

import { sidebar } from './sidebar';
import { profilePage } from './profilePage';
import { dialoguesPage } from './dialoguesPage';
import { usersPage } from './usersPage';

export const rootReducer = combineReducers({
  sidebar,
  profilePage,
  dialoguesPage,
  usersPage,
});
