export class DataAccess{
    private static instance : DataAccess;

    private constructor(){
        // DB Connection here
    }

    public static getInstance(){
        if(!DataAccess.instance){
            DataAccess.instance = new DataAccess();
        }
        return DataAccess.instance;
    }


    public getLineChartData(){

        /*
        let dataObject = {};
        dataObject["labels"] = {};
        let i : number;
        for(i=0; i < 20; i++){
            dataObject["labels"][i]=i;
        }
        dataObject["datasets"] = {};
        dataObject["datasets"]["label"] = "My First dataset";
        dataObject["datasets"]["fillColor"] = "rgba(220,220,220,0.2)";
        dataObject["datasets"]["strokeColor"] = "rgba(220,220,220,1)";
        dataObject["datasets"]["pointColor"] = "rgba(220,220,220,1)";
        dataObject["datasets"]["pointStrokeColor"] = "#fff";
        dataObject["datasets"]["pointHighlightFill"] = "#fff";
        dataObject["datasets"]["pointHighlightStroke"] = "rgba(220,220,220,1)";

        dataObject["datasets"]["data"]={};
        for(i=0; i < 20; i++){
            dataObject["datasets"]["data"][i]= i * Math.random();
        }

        return dataObject;

        // */

        let values = new Array(20);
        let i : number;
        for(i=0; i < 20; i++){
            values[i]= i;
        }

        let now : Date;
        let labels = new Array(20);
        for(i=0; i < 20; i++){
            now = new Date();
            now.setTime(now.getTime()-((20-i)*3600000));
            labels[i]= now.toTimeString().split(' ')[0];
        }

        let dataObject = {
            labels: labels,
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: values
                }
            ]
        };

        

        return dataObject;
         // */
    }

}