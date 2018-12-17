import * as React from 'react';
import { DataAccess } from '../../data/DataAccess';
import './CurrentStateDisplay.css'

interface IPVProps{
    onClick: () => void
}

class CurrentStateDisplay extends React.Component <IPVProps> {

   

    constructor (props : any){
        super(props);
        this.refreshData = this.refreshData.bind(this)
    }

    componentDidMount(){
        this.refreshData();
    }

    public refreshData(){
        let self = this;
        DataAccess.getInstance().getCurrentState()
        .then(function(response) {
          if(response.status == 200){
            response.json().then(function(data : any) {
              self.setState(data)
            });
          }
        });
    }

   

    public render(){
        const data = this.state;
        if(data == null){
            return <h1>Fetching...</h1>
        }

        const className = data["P_PV"]==null || data["P_PV"]== 0 ? "OutputValueRed" : (data["P_PV"] <= 500 ? "OutputValueRed" : "OutputValueGreen")

        return <table className="CurrentStateDisplayTable">
                <tr><th className="OutputLabel">Leistung</th><th className={className}>{data["P_PV"]==null ? 0 : data["P_PV"]}&nbsp;W</th></tr>
                <tr><td>Mode</td><td>{data["P_PV"]==null ? "-" : data["Mode"]}</td></tr>
                <tr><td>Tagesertrag</td><td>{(data["E_Day"]).toLocaleString('de', {maximumFractionDigits: 2})}&nbsp;Wh</td></tr>
                <tr><td>Jahresertrag</td><td>{(data["E_Year"]/1000).toLocaleString('de', {maximumFractionDigits: 2})}&nbsp;KWh</td></tr>
                <tr><td>Gesamtertrag</td><td>{(data["E_Total"]/1000).toLocaleString('de', {maximumFractionDigits: 2})}&nbsp;KWh</td></tr>
                <tr><td>Timestamp Wechselrichter</td><td>{data["Timestamp_PV"]}</td></tr>
                <tr><td>Timestamp API</td><td>{data["Timestamp_API"]}</td></tr>
                <tr><td></td><td><button className="RefreshButton" onClick={this.props.onClick}>Aktualisieren</button></td></tr>
            </table>

    }

}

export default CurrentStateDisplay;