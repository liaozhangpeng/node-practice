const config = require('config');
const Joi = require('joi'); //input validation
const express = require('express');
const app = express();
const logger = require('./logger'); // import custom middleware
var bodyParser = require('body-parser'); // getting body parameters through POST method
const morgan = require('morgan');

console.log("Current NODE_ENV: "+process.env.NODE_ENV);
console.log("app: "+app.get('env'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger); // custom middleware
app.use(express.static('myPublic'));


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


// app.use(express.json());

app.get('/', function(req,res){
    res.send("<h1>hello express " + req.query['name']+"</h1>");
});

app.post('/',(req,res)=>{
    console.log("reach post")
    const schema = {
        userName: Joi.string().min(6).max(15).required(),
        passCode: Joi.number().min(6).max(10).required()
    };
    
    var {error} = Joi.validate(req.body, schema);
    if(error){
        console.log(error);
        return res.status(400).send("<h1>"+error.details[0].message+"</h1>");
    }

    // console.log(req.body);
    // return res.status(200).send(req.body);
    

});

const port = process.env.PORT || 2000;
app.listen(port, ()=>{
    console.log('listening port: '+port);
});
