from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

todos = {}

class PVDataProvider(Resource):
    def get(self):
        return {"State": "online"}

    def put(self, todo_id):
        todos[todo_id] = request.form['data']
        return {todo_id: todos[todo_id]}

api.add_resource(PVDataProvider, '/')
# api.add_resource()

if __name__ == '__main__':
    app.run(debug=True)