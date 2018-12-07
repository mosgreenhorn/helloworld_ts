import requests

r = requests.get('http://192.168.8.200/solar_api/v1/GetPowerFlowRealtimeData.fcgi')
data = r.json()
print(data['Body']['Data']['Site']['P_PV'])
print(data['Body']['Data']['Site']['E_Day'])
