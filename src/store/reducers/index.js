import { combineReducers } from 'redux';

import { profilePage } from './profilePage';
import { dialoguesPage } from './dialoguesPage';
import { sidebar } from './sidebar';

export const rootReducer = combineReducers({
  profilePage,
  dialoguesPage,
  sidebar,
});
