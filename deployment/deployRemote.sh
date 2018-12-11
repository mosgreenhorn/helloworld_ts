#!/bin/bash
sudo rm -rf /var/www/html/
sudo mkdir /var/www/html
sudo cp -a /home/greenhorn/workspace/transfer/* /var/www/html/
rm -rf /home/greenhorn/workspace/transfer
mkdir /home/greenhorn/workspace/transfer
rm -rf /home/greenhorn/workspace/helloworld_ts
cd /home/greenhorn/workspace/
git clone https://github.com/mosgreenhorn/helloworld_ts

echo "Restarting"
sudo shutdown -r -t 0