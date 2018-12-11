from AbstractDataprovider import AbstractDataProvider
import mysql.connector
import datetime

class PVWeekDataProvider(AbstractDataProvider):

    weekdays = ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday", "Sunday"]

    
    def get(self):
        # TODO Replace '2018-12-08' by CURDATE()
        # ;


        data = []
        labels = self.weekdays

        currentWeekday = datetime.datetime.now().weekday()

        for i in range(7):
            if(i <= currentWeekday):
                data.append(0)
            else:
                data.append(None)

        mydb = self.getDataBaseConnection()

        mycursor = mydb.cursor()
        mycursor.execute("SELECT MAX(WEEKDAY(Timestamp)), MAX(E_Day) AS WEEKDAY FROM data WHERE WEEK(Timestamp,1) = WEEK(CURDATE(),1) GROUP BY DATE(Timestamp);")
        myresult = mycursor.fetchall()

        
        for row in myresult:
            if(row[0] < 7):
                data[row[0]] = row[1]

        return {
            "labels":labels,
            "datasets":[
                {
                "fillColor": "rgba(31,106,226,0.2)",
                "strokeColor": "rgba(31,106,226,1)",
                "pointColor": "rgba(31,106,226,1)",
                "pointStrokeColor": "#fff",
                "pointHighlightFill": "#fff",
                "pointHighlightStroke": "rgba(220,220,220,1)",
                "scaleOverride": "true",
                "label": 'PV Monitoring',
                "data": data
                }
            ]
        }

