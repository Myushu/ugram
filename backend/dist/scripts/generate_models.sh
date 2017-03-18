#!/bin/bash

DB_DATABASE="UGRAM"
DB_HOST="localhost"
DB_LOGIN="root"
DB_PASSWORD="root"

apply_patch() {
  for file in src/models/patch/*.patch
  do
    path=$(basename "$file")
    filename="src/models/"${path%.*}".js"
    patch $filename < $file
  done
}

generate_models() {
  sequelize-auto --help -o "./src/models" -d $DB_DATABASE -h $DB_HOST -u $DB_LOGIN -x $DB_PASSWORD
}

generate_models
apply_patch
