import * as React from 'react';
import './LineChart.css';
import { ChartOptionProvider } from '../../data/ChartOptionProvider';


interface ILineChartDataProps {
    data: any;
}

class MyLineChart extends React.Component<ILineChartDataProps> {

    LineChart = require("react-chartjs").Line;

    public render(){
        const {data} = this.props;
        const options = ChartOptionProvider.getInstance().getLineChartOptions();
 
        
        return <div className="LineChart">
            <this.LineChart data={data} options={options} width="1200" height="600"/>
            
        </div>
    }

    componentWillReceiveProps() {
        console.log('component receives props: ', this.props)
    }

}

export default MyLineChart;

