import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import MyLineChart from './components/chart1/MyLineChart';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MyLineChart />,
  document.getElementById('component2') as HTMLElement
);

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
