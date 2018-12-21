from AbstractDataprovider import AbstractDataProvider
import mysql.connector
import datetime

class PVDayDataProvider(AbstractDataProvider):
    def get(self):

        data = []
        labels = []
        
        currentHour = datetime.datetime.now().hour
        currentQuarter = (datetime.datetime.now().minute / 15)+1
        currentTimeCode = currentHour*4 + currentQuarter
      

        mydb = self.getDataBaseConnection()

        mycursor = mydb.cursor()
        mycursor.execute("SELECT HOUR(Timestamp) AS Hour, CEIL((Minute(TimeStamp)+1)/15) AS Quarter, CEIL(AVG(P_PV)) FROM data  WHERE DATE(`Timestamp`) = CURDATE() GROUP BY Hour, Quarter;")
        myresult = mycursor.fetchall()

        empty = True
        lasthour = 0
        lastquater = 0
        for row in myresult:
            if empty : # Put 0 value before first dataset
                data.append(0)
                hour = str(row[0] - (1 if (row[1]-1) == 0 else 0))
                labels.append(str(hour)+":"+("00" if (row[1]-1) == 0  else str((row[1]-1)*15)))
                print(row[1])

            data.append(row[2])
            labels.append(str(row[0])+":"+ ("00" if (row[1]) == 0  else str((row[1])*15)))
            empty = False
            lasthour = row[0]
            lastquater = row[1]
     
        lastTimeCode = lasthour*4 + lastquater

        if not empty and currentTimeCode > lastTimeCode : # Put 0 value after last dataset if the last one is more that 15 minutes over
            data.append(0)
            hour = str(row[0] + (1 if (row[1]) == 4 else 0))
            labels.append(str(hour)+":"+("00" if (row[1]) == 4  else str((row[1])*15)))

        if empty : 
            data.append(0)
            labels.append(str(datetime.datetime.now().time()))
       
        return {
            "labels":labels,
            "datasets":[
                {
                "fillColor" : "rgba(31,106,226,0.4)",
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