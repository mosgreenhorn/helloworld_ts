import * as React from 'react';
import { ChartOptionProvider } from '../../data/ChartOptionProvider';
import { DataAccess } from '../../data/DataAccess';


class PVMonthBarChart extends React.Component {

    constructor (props : any){
        super(props);
        this.refreshData = this.refreshData.bind(this)
    }

    componentDidMount(){
        this.refreshData();
    }

    public refreshData(){
        let self = this;
        DataAccess.getInstance().getYearData()
        .then(function(response) {
          if(response.status == 200){
            response.json().then(function(data : any) {
              self.setState(data)
            });
          }
        });
    }

    BarChart = require("react-chartjs").Bar;

    public render(){
        const data = this.state;
        if(data == null){
            return <h1>Fetching...</h1>
        }
        
        const options = ChartOptionProvider.getInstance().getBarChartOptions();
        
       

        return <div className="BarChart" >
            <this.BarChart data={data} options={options} />
            
        </div>
    }

}

export default PVMonthBarChart;