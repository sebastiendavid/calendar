import * as storage from 'redux-storage';
import { applyMiddleware, compose, createStore } from 'redux';
import createEngine from 'redux-storage-engine-localstorage';
import reducers from 'calendar/store/reducers';
import thunk from 'redux-thunk';

const hasDevTools = !!window.$$DevTools && typeof window.$$DevTools.instrument === 'function';
const storageEngine = createEngine('calendar');

export default function configureStore(initialState) {
  const store = createStore(
    storage.reducer(reducers),
    initialState,
    compose(
      applyMiddleware(thunk),
      applyMiddleware(storage.createMiddleware(storageEngine)),
      hasDevTools ? window.$$DevTools.instrument(() => store) : f => f
    )
  );
  if (hasDevTools && module.hot) {
    module.hot.accept('calendar/store/reducers', () =>
      store.replaceReducer(require('calendar/store/reducers'))
    );
  }
  storage.createLoader(storageEngine)(store);
  return store;
}
