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
            data.append(i + random.randint(0,i))
            labels.append(i)

        return {
            "data":data,
            "labels":labels}



api.add_resource(State, base_path)
api.add_resource(PVDayDataProvider, base_path+'day')
# api.add_resource()

if __name__ == '__main__':
    app.run(debug=True)