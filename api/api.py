from flask import Flask, request
from flask_restful import Resource, Api
from PVDayDataProvider import PVDayDataProvider
from PVWeekDataProvider import PVWeekDataProvider
from PVCurrentStateDataProvider import PVCurrentStateDataProvider

app = Flask(__name__)
api = Api(app)


base_path = "/api/"

class State(Resource):
    def get(self):
        return {"State": "online"}


api.add_resource(State, base_path)
api.add_resource(PVDayDataProvider, base_path+'day')
api.add_resource(PVWeekDataProvider, base_path+'week')
api.add_resource(PVCurrentStateDataProvider, base_path+'current')
# api.add_resource()

# To avoid CORS Errors in JavaScript
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug="true")