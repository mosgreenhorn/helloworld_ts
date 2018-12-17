from AbstractDataprovider import AbstractDataProvider
import requests
import datetime

class PVCurrentStateDataProvider(AbstractDataProvider):

    def get(self):
        r = requests.get('http://192.168.8.200/solar_api/v1/GetPowerFlowRealtimeData.fcgi')
        data = r.json()

        return {
            "Mode" : data['Body']['Data']['Site']['Mode'],
            "P_PV" : data['Body']['Data']['Site']['P_PV'],
            "E_Day" : data['Body']['Data']['Site']['E_Day'],
            "E_Year" : data['Body']['Data']['Site']['E_Year'],
            "E_Total" : data['Body']['Data']['Site']['E_Total'],
            "Timestamp_PV" : data['Head']['Timestamp'],
            "Timestamp_API" : str(datetime.datetime.now())
        }

