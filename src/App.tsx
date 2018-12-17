import * as React from 'react';
import './App.css';
import PVDayDataLineChart from './components/chart1/MyLineChart';
import PVWeekDataChart from './components/chart2/WeekDataChart';
import CurrentStateDisplay from './components/display/CurrentStateDisplay';
// import PVWeekDataChart from './components/chart2/WeekDataChart';




class App extends React.Component {

  private dispayRef: React.RefObject<CurrentStateDisplay>
  private weekRef : React.RefObject<PVWeekDataChart>
  private dayRef : React.RefObject<PVDayDataLineChart>

  constructor(props : any){
    super(props);
    this.refreshAll = this.refreshAll.bind(this);
    this.dispayRef = React.createRef();
    this.weekRef = React.createRef();
  }


  refreshAll(){
    if(this.dispayRef != null && this.dispayRef.current != null){
      this.dispayRef.current.refreshData();
    }
    if(this.weekRef != null && this.weekRef.current != null){
      this.weekRef.current.refreshData();
    }
    if(this.dayRef != null && this.dayRef.current != null){
      this.dayRef.current.refreshData();
    }
  }
  
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
              <PVWeekDataChart ref={this.weekRef} />
            </td>
          </tr>
          <tr>
            <td>
            <CurrentStateDisplay ref={this.dispayRef} onClick={this.refreshAll}/>
            </td>
            <td>
                            
            </td>
          </tr>
        </table>
        
       
      </div>
    );
  }
}

export default App;
