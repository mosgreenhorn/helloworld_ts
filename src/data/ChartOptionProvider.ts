export class ChartOptionProvider{

    private static instance : ChartOptionProvider;

    private constructor(){

    }

    public static getInstance(){
        if(!ChartOptionProvider.instance){
            ChartOptionProvider.instance = new ChartOptionProvider();
        }
        return ChartOptionProvider.instance;
    }

    public getBarChartOptions(){
        return {
            responsive: true,
            pointDot : true
        }
    }

    public getLineChartOptions(){
        return {
            responsive: true,
            
            showScale: true,

            scaleBeginAtZero: true,
            
            ///Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines : true,

        
            //String - Colour of the grid lines
            scaleGridLineColor : "rgba(230,230,230,.5)",
        
            //Number - Width of the grid lines
            scaleGridLineWidth : 1,
        
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
        
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
        
            //Boolean - Whether the line is curved between points
            bezierCurve : true,
        
            //Number - Tension of the bezier curve between points
            bezierCurveTension : 0.3,
        
            //Boolean - Whether to show a dot for each point
            pointDot : false,
        
            //Number - Radius of each point dot in pixels
            pointDotRadius : 4,
        
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth : 1,
        
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius : 10,
        
            //Boolean - Whether to show a stroke for datasets
            datasetStroke : true,
        
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth : 2,
        
            //Boolean - Whether to fill the dataset with a colour
            datasetFill : true,
          
            //Boolean - Whether to horizontally center the label and point dot inside the grid
            offsetGridLines : false
        };
    }

    
}