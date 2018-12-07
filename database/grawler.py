import requests
import mysql.connector


r = requests.get('http://192.168.8.200/solar_api/v1/GetPowerFlowRealtimeData.fcgi')
data = r.json()


mydb = mysql.connector.connect(
  host="localhost",
  user="user",
  passwd="P.assword123",
  database="monitoring"
)

mycursor = mydb.cursor()


sql = "INSERT INTO data (P_PV, E_Day, E_Year, E_Total) VALUES (%s, %s, %s, %s)"
val = (
    0 if data['Body']['Data']['Site']['P_PV'] is None else data['Body']['Data']['Site']['P_PV'], 
    0 if data['Body']['Data']['Site']['E_Day'] is None else data['Body']['Data']['Site']['E_Day'], 
    0 if data['Body']['Data']['Site']['E_Year'] is None else data['Body']['Data']['Site']['E_Year'], 
    0 if data['Body']['Data']['Site']['E_Total'] is None else data['Body']['Data']['Site']['E_Total']
)

mycursor.execute(sql, val)

mydb.commit()

mydb.close()



