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
                <tr><td>Aktuelle Leistung</td><td>{data["P_PV"]}&nbsp;W</td></tr>
                <tr><td>Tagesleistung</td><td>{data["E_Day"]}&nbsp;Wh</td></tr>
                <tr><td>Jahresleistung</td><td>{data["E_Year"]}&nbsp;Wh</td></tr>
                <tr><td>Gesamtleistung</td><td>{data["E_Total"]}&nbsp;Wh</td></tr>
            </table>

    }

}

export default CurrentStateDisplay;