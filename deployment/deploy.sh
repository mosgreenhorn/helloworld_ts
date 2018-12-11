#!/bin/bash
npm run build
cp deployRemote.sh ../build/
cd ..
scp -r build/* greenhorn@192.168.8.202:/home/greenhorn/workspace/transfer
ssh greenhorn@192.168.8.202
