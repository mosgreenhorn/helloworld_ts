React App
---------
$ sudo apt-get install git
$ sudo apt-get install npm
$ sudo apt update
$ sudo apt install nodejs
$ sudo npm install -g create-react-app
$ sudo npm install react-chartjs-2 chart.js --save
$ sudo npm install --save chart.js@^1.1.1 react react-dom
$ sudo npm install --save react-bar-chart
$ sudo npm install

For IDE
--------
$ sudo apt update
$ sudo apt install software-properties-common apt-transport-https wget
$ wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
$ sudo apt install code


For API
-------
Python Request API
$ git clone git://github.com/requests/requests.git
$ cd requests
$ pip install 
$ sudo python -m pip install Flask
$ sudo python -m pip install flask-restful

Python MYSQL Connector
$ sudo python -m pip install mysql-connector

FOR DATABASE
$ sudo apt update
$ sudo apt install mysql-server
$ sudo mysql_secure_installation
$ sudo mysql < init.sql

CronJob
$ crontab -e
  * *     * * *   python /home/dominic/workspace/HelloWorldTS/helloworld_ts/database/grawler.py
  @reboot         python /home/dominic/workspace/HelloWorldTS/helloworld_ts/api/api.py
