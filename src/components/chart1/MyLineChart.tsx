import * as React from 'react';
import './LineChart.css';
import { ChartOptionProvider } from '../../data/ChartOptionProvider';
import { DataAccess } from '../../data/DataAccess';



class PVDayDataLineChart extends React.Component {


    

    componentDidMount(){
        let self = this;
        DataAccess.getInstance().getLineChartData()
        .then(function(response) {
          if(response.status == 200){
            response.json().then(function(data : any) {
              console.log(data)
              self.setState(data)
            });
          }
        });
    }


    LineChart = require("react-chartjs").Line;

    public render(){
        const data = this.state;
        if(data == null){
            return <h1>Fetching...</h1>
        }
        
        const options = ChartOptionProvider.getInstance().getLineChartOptions();
         
        return <div className="LineChart">
            <this.LineChart data={data} options={options} />
            
        </div>
    }

    componentWillReceiveProps() {
        console.log('component receives props: ', this.props)
    }

}

export default PVDayDataLineChart;