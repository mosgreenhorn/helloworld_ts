import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';

import MyLineChart from './components/chart1/MyLineChart';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { DataAccess } from './data/DataAccess';
import { ChartOptionProvider } from './data/ChartOptionProvider';

// load data via fetch api from backend
// transform data

function update(): Promise<any> {
  return DataAccess.getInstance().getLineChartData();
}

const chartOptions = ChartOptionProvider.getInstance().getLineChartOptions();
const onClick = () => {
  update().then((response) => render(response, chartOptions));
}


function render(data: any, options: any) {
  ReactDOM.render(
    <MyLineChart data={data} options={options} onClick={onClick}/>,
    document.getElementById('component2') as HTMLElement
  );
}

update().then((response) => render(response, chartOptions));

/*
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
*/

registerServiceWorker();
