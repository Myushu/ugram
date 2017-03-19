#!/bin/bash

PICTURES_FOLDER="pictures"
VERSION=1.3

mkdir /tmp/$PICTURES_FOLDER
cp dist/images/default /tmp/$PICTURES_FOLDER/default
zip -r ugram-$VERSION.zip config/* src/* test/* app.js package.json /tmp/$PICTURES_FOLDER
