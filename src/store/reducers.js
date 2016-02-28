import { combineReducers } from 'redux';
import views from 'calendar/views/reducer';

export function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap.get(action.type);
    return reducer ? reducer(state, action) : state;
  };
}

export default combineReducers({
  views
});
