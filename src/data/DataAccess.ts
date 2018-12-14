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
        const serverName = window.location.hostname;
        return Promise.resolve(fetch("http://"+serverName+":5000/api/day"));
    }


    getWeekData() : Promise<any>{
        const serverName = window.location.hostname;
        return Promise.resolve(fetch("http://"+serverName+":5000/api/week"));
    }

    getCurrentState() : Promise<any>{
        const serverName = window.location.hostname;
        return Promise.resolve(fetch("http://"+serverName+":5000/api/current"));
    }

}