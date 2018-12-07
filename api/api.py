from flask import Flask, request
from flask_restful import Resource, Api
import random

app = Flask(__name__)
api = Api(app)

todos = {}


base_path = "/api/"

class State(Resource):
    def get(self):
        return {"State": "online"}


class PVDayDataProvider(Resource):
    def get(self):
        data = []
        labels = []

        for i in range(20):
            data.append(i + random.randint(0,i)+55)
            labels.append(i)

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