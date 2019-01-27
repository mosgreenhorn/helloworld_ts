from AbstractDataprovider import AbstractDataProvider
import mysql.connector
import datetime

class PVMonthDataProvider(AbstractDataProvider):

    months= ["Janner", "Februar", "Marz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]

    
    def get(self):
        data = []
        labels = []

        currentMonth = datetime.datetime.now().month -1
        for i in range(12):
            labels.append(self.months[i])
            if i <= currentMonth :
                data.append(0)
            else :
                data.append(None)
       
        mydb = self.getDataBaseConnection()

        mycursor = mydb.cursor()
        mycursor.execute("SELECT MONTH(MAX(Timestamp)), MAX(E_Day) FROM data WHERE YEAR(Timestamp) = YEAR(CURDATE()) GROUP BY DATE(Timestamp)")
        myresult = mycursor.fetchall()

        
        for row in myresult:
            data[row[0]-1] += int(row[1])
        
        mycursor.close()

        return {
            "labels":labels,
            "datasets":[
                {
                "fillColor": "rgba(38, 238, 242,0.2)",
                "strokeColor": "rgba(38, 238, 242,1)",
                "pointColor": "rgba(38, 238, 242,1)",
                "pointStrokeColor": "#fff",
                "pointHighlightFill": "#fff",
                "pointHighlightStroke": "rgba(220,220,220,1)",
                "scaleOverride": "true",
                "label": 'PV Monitoring',
                "data": data
                }
            ]
        }

