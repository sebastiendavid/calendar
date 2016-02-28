import { connect } from 'react-redux';
import changeView from 'calendar/views/changeView';
import Day from 'calendar/views/day';
import Month from 'calendar/views/month';
import React, { Component, PropTypes } from 'react';
import Week from 'calendar/views/week';

export const VIEW_DAY = 'view_day';
export const VIEW_MONTH = 'view_month';
export const VIEW_WEEK = 'view_week';

const mapStateToProps = (state) => ({
  view: state.get('view')
});

export default connect(mapStateToProps)(class Views extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    view: PropTypes.string
  };

  render() {
    const { dispatch, view } = this.props;
    let View;
    switch (view) {
      case VIEW_DAY:
        View = Day;
        break;
      case VIEW_MONTH:
        View = Month;
        break;
      case VIEW_WEEK:
        View = Week;
        break;
      default:
        dispatch(changeView(VIEW_MONTH));
        return null;
    }
    return (
      <section className="Views">
        <View />
      </section>
    );
  }
});
