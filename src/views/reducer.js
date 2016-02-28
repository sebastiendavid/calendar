import { CHANGE_VIEW } from 'calendar/views/changeView';
import { createReducer } from 'calendar/store/reducers';
import { Map } from 'immutable';
import { VIEW_MONTH } from 'calendar/views';

const initialState = Map({
  view: VIEW_MONTH
});

export default createReducer(initialState, Map({
  [CHANGE_VIEW](state, action) {
    return state.set('view', action.view);
  }
}));
