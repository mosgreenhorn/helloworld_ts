from AbstractDataprovider import AbstractDataProvider
import mysql.connector
import datetime

class PVWeekDataProvider(AbstractDataProvider):

    weekdays = ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday", "Sunday"]

    
    def get(self):
        data = []
        labels = []

        currentWeekday = datetime.datetime.now().weekday()

        for i in range(7):
            labels.append(self.weekdays[(i+1+currentWeekday)%7])
            data.append(0)

        mydb = self.getDataBaseConnection()

        mycursor = mydb.cursor()
        # mycursor.execute("SELECT MAX(WEEKDAY(Timestamp)), MAX(E_Day) AS WEEKDAY FROM data WHERE WEEK(Timestamp,1) = WEEK(CURDATE(),1) GROUP BY DATE(Timestamp);")
        mycursor.execute("SELECT DATE(Timestamp), MAX(DATEDIFF(DATE(Timestamp), SUBDATE(CURDATE(), 6))) AS POS, MAX(WEEKDAY(Timestamp)), MAX(E_Day) AS WEEKDAY FROM data WHERE DATE(Timestamp) >= SUBDATE(CURDATE(),6) GROUP BY DATE(Timestamp);")
        myresult = mycursor.fetchall()

        
        for row in myresult:
            data[row[1]] = row[3]
            labels[row[1]] = labels[row[1]]
        
        labels[6] = "Today"
        labels[5] = "Yesterday"

        return {
            "labels":labels,
            "datasets":[
                {
                "fillColor": "rgba(0, 196, 52,0.2)",
                "strokeColor": "rgba(0, 196, 52,1)",
                "pointColor": "rgba(0, 196, 52,1)",
                "pointStrokeColor": "#fff",
                "pointHighlightFill": "#fff",
                "pointHighlightStroke": "rgba(220,220,220,1)",
                "scaleOverride": "true",
                "label": 'PV Monitoring',
                "data": data
                }
            ]
        }

