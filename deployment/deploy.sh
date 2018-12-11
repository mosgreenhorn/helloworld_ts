#!/bin/bash
npm run build
cp deployRemote.sh ../build/
cd ..
scp -r build/* greenhorn@192.168.8.202:/tmp/transfer
ssh greenhorn@192.168.8.202
