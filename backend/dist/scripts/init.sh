#!/bin/bash

DB_HOST="localhost"
DB_LOGIN="root"
DB_PASSWORD="root"
PICTURES_FOLDER="pictures"

mysql -u $DB_LOGIN -p$DB_PASSWORD -h $DB_HOST < dist/ugram.sql
mkdir -p $PICTURES_FOLDER
cp dist/images/default $PICTURES_FOLDER/default
