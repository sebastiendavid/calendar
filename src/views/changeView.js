import { Map } from 'immutable';
import { VIEW_DAY, VIEW_MONTH, VIEW_WEEK } from 'calendar/views';

export const CHANGE_VIEW = 'change_view';

export default function changeView(view) {
  if ([VIEW_DAY, VIEW_MONTH, VIEW_WEEK].indexOf(view) >= 0) {
    return Map({ type: CHANGE_VIEW, view });
  }
  return null;
}
