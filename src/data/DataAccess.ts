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


    loadData(): Promise<number[]> {
        return Promise.resolve([5,3,2]);
    }



    getLineChartData(): Promise<any>{

        

        // Fetch API --> MDN Fetch API
        // fetch()
        
        let values = new Array(20);
        let i : number;
        for(i=0; i < 20; i++){
            values[i]= i*Math.random();
        }

        let now : Date;
        let labels = new Array(20);
        for(i=0; i < 20; i++){
            now = new Date();
            now.setTime(now.getTime()-((19-i)*3600000));
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

        // only fetch here, cause fetch already returns the promise

        // fetch('http://example.com/movies.json')
        // .then(function(response) {
        //   return response.json();
        // })
        // .then(function(myJson) {
        //   console.log(JSON.stringify(myJson));
        // });
        return Promise.resolve(<any>dataObject);
        // */
    }

}