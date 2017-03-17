# ugram-h17-team-06

[![Build Status](https://travis-ci.com/GLO3102/ugram-h17-team-06.svg?token=aFfqYprXthpFtCp3eomp&branch=master)](https://travis-ci.com/GLO3102/ugram-h17-team-06)

## About Project

**AWS Links :**
- [front end](http://laval-ugram-team-06.s3-website-us-east-1.amazonaws.com/)
- back end

## Project Configuration

### Front end
The compressed and minified files are in frontend/src/dist  
Generate minified files:
``````
ng build
``````
Running project locally (localhost:4200):
```
ng serve
```

### Back end

To run the server, set information on the config file ``` backend/config/default.json```.   
You must init the SQL database :
```
mysql -u [user] -p[password] < backend/dist/ugram.sql
mysql -u [user] -p[password] < dist/phone_code.sql
```
You also must start the [redis](redis.io) database : 
```
sudo service redis start
```
If you want ton init the database, you must run : 
```
npm run-script initialize
```
Then you can start the server :
```
cd backend
npm start
```

### Project implémentation
### Front end
[git-s3](https://github.com/schickling/git-s3) is used to deploy the project on S3 AWS bucket  

### Back end
The server is based on  [express](http://expressjs.com/). The token manager is [jwt](http://jwt.io). The logger is [Winston](https://github.com/lazywithclass/winston-cloudwatch). The MySQL driver is [mysql](https://www.npmjs.com/package/mysql). The [Redis](redis.io) driver is [redis](https://www.npmjs.com/package/redis).
The SQL orm is [sequelize](http://docs.sequelizejs.com/en/v3/). The models are stored on ```backend/src/models```. To regenerate the models, run :
```
backend/dist/generate_models.sh 
```
The services are stored on ```backend/src/services``` and controllers on ```backend/src/controllers```. The common folder (```backend/src/common```) contains the services using by other services such as the orm or the configuration file manager.
