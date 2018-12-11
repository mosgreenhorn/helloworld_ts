from AbstractDataprovider import AbstractDataProvider
import mysql.connector
import datetime

class PVDayDataProvider(AbstractDataProvider):
    def get(self):

        hourStartOffset = 5         # start at 5 AM
        hours2Show = 18             # end at 22 PM    
        datapoints = hours2Show * 4 # 4 measures per hour

        currentHour = datetime.datetime.now().hour
        currentQuarter = (datetime.datetime.now().minute / 15)+1

        data = []
        labels = []
        
        for i in range(datapoints):
            labels.append(str((i//4)+hourStartOffset)+":" + str(i%4*15) + ("0" if i%4 == 0 else ""))
            if i < (currentHour-hourStartOffset)*4+currentQuarter :
                data.append(0)
            else:
                data.append(None)

        mydb = self.getDataBaseConnection()

        mycursor = mydb.cursor()
        mycursor.execute("SELECT HOUR(Timestamp) AS Hour, CEIL(Minute(TimeStamp)/15) AS Quarter, CEIL(AVG(P_PV)) FROM data  WHERE DATE(`Timestamp`) = CURDATE() GROUP BY Hour, Quarter;")
        myresult = mycursor.fetchall()

        
        for row in myresult:
            pos = (row[0]-hourStartOffset)*4+row[1]
            data[pos] = row[2]
       
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
                "scaleStartValue": 0,
                "scaleStepWidth": 400,
                "scaleSteps": 4000,
                "scaleMax": 4000,
                "data": data
                }
            ]
        }