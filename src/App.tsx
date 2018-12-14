import * as React from 'react';
import './App.css';
import PVDayDataLineChart from './components/chart1/MyLineChart';
import PVWeekDataChart from './components/chart2/WeekDataChart';
import CurrentStateDisplay from './components/display/CurrentStateDisplay';
// import PVWeekDataChart from './components/chart2/WeekDataChart';




class App extends React.Component {

  
  public render() {

    

    return (
      <div className="App">
        <header className="App-header">
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
          <tr>
            <td></td>
            <td>
              <CurrentStateDisplay/>
            </td>
          </tr>
        </table>
        
       
      </div>
    );
  }
}

export default App;
