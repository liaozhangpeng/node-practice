const config = require('config');
const startupDebugger = require('debug')('myApp:startup'); // debugger
const dbDebugger = require('debug')('myApp:db');
const Joi = require('joi'); //input validation
const express = require('express');
const app = express();
const logger = require('./logger'); // import custom middleware
const bodyParser = require('body-parser'); // getting body parameters through POST method
const morgan = require('morgan');   // get request detail, time,content
const home = require('./routes/home');

console.log("Current NODE_ENV: "+process.env.NODE_ENV);
console.log("app: "+app.get('env'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger); // custom middleware
app.use(express.static('myPublic'));

app.use('/',home);

//Configuration
console.log("----- configuration -----");
// this is one way to enable middleware at different environment: production or development
if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    console.log("---using morgan middleware---");
}

//this uses config to control configuration, better way
console.log("NODE_ENV: "+config.get('name'));
console.log("host: "+config.get('mail.host'));

//set environment password: $evn:app_password='12345678abcdefg'
//set password in the custom-environment-variables.json file
// console.log("the app_password: "+config.get("mail.password"));
console.log("--------------------------")

//using debug, set environment DEBUG, eg: $env:DEBUG='myApp:*' , myApp is prefix
startupDebugger('reach 1');
dbDebugger('reach 2');

// app.use(express.json());


const port = process.env.PORT || 2000;
app.listen(port, ()=>{
    console.log('listening port: '+port);
});
