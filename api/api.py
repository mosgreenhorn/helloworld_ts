from flask import Flask, request
from flask_restful import Resource, Api
import random
import mysql.connector

app = Flask(__name__)
api = Api(app)

todos = {}


base_path = "/api/"

class State(Resource):
    def get(self):
        return {"State": "online"}


class PVDayDataProvider(Resource):
    def get(self):

        hours = 25
        
        data = []
        labels = []
        
        for i in range(hours):
            labels.append(str(i)+":00")
            data.append(None)

        mydb = mysql.connector.connect(
        host="localhost",
        user="user",
        passwd="P.assword123",
        database="monitoring"
        )

        mycursor = mydb.cursor()
        mycursor.execute("SELECT HOUR(Timestamp), AVG(P_PV) FROM data  WHERE DATE(`Timestamp`) = SUBDATE(CURDATE(),0) GROUP BY HOUR(Timestamp)")
        myresult = mycursor.fetchall()

        for row in myresult:
            data[row[0]] = row[1]
       


        return {
            "labels":labels,
            "datasets":[
                {
                "label": "My First dataset",
                "fillColor": "rgba(220,220,220,0.2)",
                "strokeColor": "rgba(220,220,220,1)",
                "pointColor": "rgba(220,220,220,1)",
                "pointStrokeColor": "#fff",
                "pointHighlightFill": "#fff",
                "pointHighlightStroke": "rgba(220,220,220,1)",
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