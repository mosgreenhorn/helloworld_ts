import * as React from 'react';
import { ChartOptionProvider } from '../../data/ChartOptionProvider';
import { DataAccess } from '../../data/DataAccess';


class PVWeekDataChart extends React.Component {

    constructor (props : any){
        super(props);
        this.refreshData = this.refreshData.bind(this)
    }

    componentDidMount(){
        this.refreshData();
    }

    public refreshData(){
        let self = this;
        DataAccess.getInstance().getWeekData()
        .then(function(response) {
          if(response.status == 200){
            response.json().then(function(data : any) {
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
        
       

        return <div className="LineChart" >
            <this.LineChart data={data} options={options} />
            
        </div>
    }

}

export default PVWeekDataChart;