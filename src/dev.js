import { createDevTools } from 'redux-devtools';
import { render } from 'react-dom';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import Perf from 'react-addons-perf';
import React from 'react';
import SliderMonitor from 'redux-slider-monitor';

console.warn('dev modes activated');
// Perf.start();
window.$$Perf = Perf;

if (typeof window.devToolsExtension === 'function') {
  console.info('redux dev tools detected in your browser developer tools');
  window.$$DevTools = { instrument: window.devToolsExtension };
} else {
  console.info('to open or hide redux dev tools: ctrl-h');
  const DevTools = createDevTools(
    <DockMonitor
      toggleVisibilityKey="ctrl-h"
      changePositionKey="ctrl-q"
      changeMonitorKey="ctrl-m"
      defaultIsVisible={false}
      defaultPosition="bottom"
    >
      <LogMonitor theme="tomorrow" />
      <SliderMonitor />
    </DockMonitor>
  );
  const instrument = DevTools.instrument.bind(DevTools);
  DevTools.instrument = (getStore) => {
    setTimeout(() => render(<DevTools store={getStore()} />, document.getElementById('$$DevTools')), 1);
    return instrument();
  };
  window.$$DevTools = DevTools;
}
