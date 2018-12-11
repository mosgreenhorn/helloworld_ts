#!/bin/bash
sudo rm -rf /var/www/html/
sudo mkdir /var/www/html
sudo cp -a /tmp/transfer/* /var/www/html/
rm -rf /tmp/transfer
mkdir /tmp/transfer
cd /home/greenhorn/workspace/helloworld_ts/
git pull
sudo shutdown -r -t 0