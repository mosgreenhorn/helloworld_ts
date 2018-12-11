import * as React from 'react';
import './App.css';
import MyLineChart from './components/chart1/MyLineChart';

import logo from './logo.svg';


interface IPVAppDataProps {
  dayLineChartdata: any;
}

class App extends React.Component<IPVAppDataProps> {

  
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MyLineChart data={this.props.dayLineChartdata}/>
      </div>
    );
  }
}

export default App;
