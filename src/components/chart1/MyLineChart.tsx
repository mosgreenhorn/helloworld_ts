import * as React from 'react';
import { DataAccess } from 'src/data/DataAccess';
import './LineChart.css';
import { ChartOptionProvider } from 'src/data/ChartOptionProvider';

class MyLineChart extends React.Component {

    LineChart = require("react-chartjs").Line;

    public render(){
        let chartData = DataAccess.getInstance().getLineChartData();
        let chartOptions = ChartOptionProvider.getInstance().getLineChartOptions();
        return <this.LineChart data={chartData} options={chartOptions} width="600" height="250"/>
    }

}

export default MyLineChart;