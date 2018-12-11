import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';


import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { DataAccess } from './data/DataAccess';

// load data via fetch api from backend
// transform data

function update(){
  DataAccess.getInstance().getLineChartData()
    .then(function(response) {
      if(response.status == 200){
        response.json().then(function(data : any) {
          render(data);
        });
      }
      
    });
}


/*
const onClick = () => {
  update();
}
*/


function render(dayLineChartdata: any) {
  ReactDOM.render(
    <App dayLineChartdata={dayLineChartdata}/>,
    document.getElementById('root') as HTMLElement
  );
}


/*
function render(data: any, options: any) {
  ReactDOM.render(
    <MyLineChart data={data} options={options} onClick={onClick}/>,
    document.getElementById('component2') as HTMLElement
  );
}
*/

update();

/*
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
*/

registerServiceWorker();
