import { applyMiddleware, compose, createStore } from 'redux';
import reducers from 'calendar/store/reducers';
import thunk from 'redux-thunk';

const hasDevTools = !!window.$$DevTools && typeof window.$$DevTools.instrument === 'function';

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk),
      hasDevTools ? window.$$DevTools.instrument(() => store) : f => f
    )
  );
  if (hasDevTools && module.hot) {
    module.hot.accept('calendar/store/reducers', () =>
      store.replaceReducer(require('calendar/store/reducers'))
    );
  }
  return store;
}
