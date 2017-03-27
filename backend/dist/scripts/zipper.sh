#!/bin/bash

PICTURES_FOLDER="pictures"

if [ "$1" == "" ]; then
    echo "please set the ugram version"
    exit 1;
fi

mkdir /tmp/$PICTURES_FOLDER
cp dist/images/default /tmp/$PICTURES_FOLDER/default
zip -r ugram-$1.zip config/* src/* test/* app.js package.json /tmp/$PICTURES_FOLDER
