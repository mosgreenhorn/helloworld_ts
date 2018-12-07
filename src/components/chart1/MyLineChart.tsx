import * as React from 'react';
import './LineChart.css';


interface ILineChartDataProps {
    data: any;
    options: any;
    onClick: () => void
}

class MyLineChart extends React.Component<ILineChartDataProps> {

    LineChart = require("react-chartjs").Line;

    public render(){
        const {data, options, onClick} = this.props;
        
        return <div className="LineChart">
            <button type="button" onClick={onClick}>Click me!</button>
            <this.LineChart data={data} options={options} width="800" height="400"/>
            
        </div>
    }

    // <DataTable rows={(data.datasets[0].data as number[])}></DataTable>

    componentWillReceiveProps() {
        console.log('component receives props: ', this.props)
    }

}

export default MyLineChart;


interface IDataTableProps {
    rows: number[];
}

export class DataTable extends React.Component<IDataTableProps> {
    public render(){
        return <table>
            <thead><tr><th>Data</th></tr></thead>
            <tbody>{this.props.rows.map((row, i) => <tr key={i}><td>{row}</td></tr>)}</tbody>
        </table>;
    }
}