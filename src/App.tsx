import * as React from 'react';
import './App.css';
import PVDayDataLineChart from './components/chart1/MyLineChart';

import logo from './logo.svg';
import PVWeekDataChart from './components/chart2/WeekDataChart';
// import PVWeekDataChart from './components/chart2/WeekDataChart';




class App extends React.Component {

  
  public render() {

    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dominic's PV Monitoring</h1>
        </header>
        <table className="centerTable">
          <tr>
            <td>
            <PVDayDataLineChart />
            </td>
            <td>
            <PVWeekDataChart />
            </td>
          </tr>
        </table>
        
       
      </div>
    );
  }
}

export default App;
