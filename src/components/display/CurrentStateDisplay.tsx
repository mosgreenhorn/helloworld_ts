import * as React from 'react';
import { DataAccess } from '../../data/DataAccess';
import './CurrentStateDisplay.css'

class CurrentStateDisplay extends React.Component {


    componentDidMount(){
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
        return <table className="CurrentStateDisplayTable">
                <tr><th>Parameter</th><th>Wert</th></tr>
                <tr><td>Modus</td><td>{data["Mode"]}</td></tr>
                <tr><td>Aktuelle Leistung</td><td>{data["P_PV"]==null ? 0 : data["P_PV"]}&nbsp;W</td></tr>
                <tr><td>Tagesleistung</td><td>{(data["E_Day"]).toLocaleString('de', {maximumFractionDigits: 2})}&nbsp;Wh</td></tr>
                <tr><td>Jahresleistung</td><td>{(data["E_Year"]/1000).toLocaleString('de', {maximumFractionDigits: 2})}&nbsp;KWh</td></tr>
                <tr><td>Gesamtleistung</td><td>{(data["E_Total"]/1000).toLocaleString('de', {maximumFractionDigits: 2})}&nbsp;KWh</td></tr>
            </table>

    }

}

export default CurrentStateDisplay;