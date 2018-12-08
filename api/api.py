from flask import Flask, request
from flask_restful import Resource, Api
import random
import mysql.connector
import datetime

app = Flask(__name__)
api = Api(app)


base_path = "/api/"

class State(Resource):
    def get(self):
        return {"State": "online"}


class PVDayDataProvider(Resource):
    def get(self):

        hourStartOffset = 5         # start at 5 AM
        hours2Show = 18             # end at 22 PM    
        datapoints = hours2Show * 4 # 4 measures per hour

        currentHour = datetime.datetime.now().hour
        currentQuarter = datetime.datetime.now().minute % 15

        data = []
        labels = []
        
        for i in range(datapoints):
            labels.append(str((i//4)+hourStartOffset)+":" + str(i%4*15) + ("0" if i%4 == 0 else ""))
            if i < (currentHour-hourStartOffset)*4+currentQuarter :
                data.append(0)
            else:
                data.append(None)

        mydb = mysql.connector.connect(
            host="localhost",
            user="user",
            passwd="P.assword123",
            database="monitoring"
        )

        mycursor = mydb.cursor()
        # mycursor.execute("SELECT HOUR(Timestamp), AVG(P_PV) FROM data  WHERE DATE(`Timestamp`) = SUBDATE(CURDATE(),0) GROUP BY HOUR(Timestamp)")
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



api.add_resource(State, base_path)
api.add_resource(PVDayDataProvider, base_path+'day')
# api.add_resource()

# To avoid CORS Errors in JavaScript
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response

if __name__ == '__main__':
    app.run(debug=True)