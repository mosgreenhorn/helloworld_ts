from flask import Flask, request
from flask_restful import Resource, Api
import mysql.connector

class AbstractDataProvider(Resource):

    def getDataBaseConnection(self):
        return mysql.connector.connect(
            host="localhost",
            user="user",
            passwd="P.assword123",
            database="monitoring"
        )