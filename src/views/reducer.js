import { CHANGE_VIEW } from 'calendar/views/changeView';
import { createReducer } from 'calendar/store/reducers';
import { Map } from 'immutable';
import { NAV_NEXT, NAV_PREVIOUS } from 'calendar/views/navigate';
import { VIEW_WEEK } from 'calendar/views';
import moment from 'moment';

const initialState = Map({
  view: VIEW_WEEK,
  month: moment().startOf('month').format(),
  week: moment().startOf('week').format()
});

export default createReducer(initialState, Map({
  [CHANGE_VIEW](state, action) {
    return state.set('view', action.view);
  },
  [NAV_NEXT](state) {
    return state.set('week', moment(state.get('week')).add(1, 'weeks').format());
  },
  [NAV_PREVIOUS](state) {
    return state.set('week', moment(state.get('week')).subtract(1, 'weeks').format());
  }
}));
