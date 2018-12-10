from flask import Flask, request
from flask_restful import Resource, Api


class PVWeekDataProvider(Resource):
    def get(self):
        # SELECT DATE(TIMESTAMP), MAX(E_Day) FROM data GROUP BY DATE(Timestamp);
        return {"State" : "under construction"}