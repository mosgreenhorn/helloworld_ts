#!/bin/bash
npm run build
scp -r build/ greenhorn@192.168.8.202:/tmp/transfer