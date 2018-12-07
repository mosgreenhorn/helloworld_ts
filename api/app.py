#!/usr/bin/python

"""
usersnack backend and json api
"""
from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson import json_util
import json

app = Flask(__name__)
app.config['MONGO_HOST'] = 'localhost'
app.config['MONGO_PORT'] = 27017
app.config['MONGO_DBNAME'] = 'usersnack'
mongo = PyMongo(app)

api = Api(app)
cors = CORS(app, resources={r"/api/v1/*": {"origins": "http://localhost:4200"}})

base_path = '/api/v1/'

class Pizzas(Resource):
    def get(self):
        """GET all pizzas"""
        pizzas = []
        cursor = mongo.db.pizzas.find()
        for item in cursor:
            pizzas.append(item)
        return json.loads(json_util.dumps(pizzas))

class Pizza(Resource):
    def get(self, pizza_id):
        """GET a pizza by id"""
        pizza = mongo.db.pizzas.find_one({'id':pizza_id})
        return json.loads(json_util.dumps(pizza))

class Extras(Resource):
    def get(self):
        """GET all extras"""
        extras = []
        cursor = mongo.db.extras.find()
        for item in cursor:
            extras.append(item)
        return json.loads(json_util.dumps(extras))

class Orders(Resource):
    def get(self):
        """GET all orders"""
        orders = []
        cursor = mongo.db.orders.find()
        for item in cursor:
            orders.append(item)
        return json.loads(json_util.dumps(orders))
    def post(self):
        """POST new order"""
        order = json_util.loads(json_util.dumps(request.json))
        mongo.db.orders.insert_one(order)
        # TODO: send email
        return request.json

# url mapping
api.add_resource(Pizzas, base_path + 'pizzas')
api.add_resource(Pizza, base_path + 'pizzas/<int:pizza_id>')
api.add_resource(Extras, base_path + 'extras')
api.add_resource(Orders, base_path + 'orders')

# dont use in production mode
if __name__ == '__main__':
    app.run(debug=True)
