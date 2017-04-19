#!/bin/bash

FOLDER="/tmp/ugram"
PICTURES_FOLDER="pictures"

if [ "$1" == "" ]; then
    echo "please set the ugram version"
    exit 1;
fi

mkdir $FOLDER
mkdir $FOLDER/$PICTURES_FOLDER

cp dist/images/default $FOLDER/$PICTURES_FOLDER/default
cp -r  config $FOLDER/
cp -r  src $FOLDER/
cp -r  test $/
cp -r  app.js $FOLDER/
cp -r  package.json $FOLDER/

cd $FOLDER
zip -r ugram-$1.zip   \
  ./config/*    \
  ./src/*       \
  ./app.js      \
  ./package.json\
  ./$PICTURES_FOLDER
cd -
mv $FOLDER/ugram-$1.zip .



rm -rf $FOLDER
