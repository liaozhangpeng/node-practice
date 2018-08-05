const Joi = require('joi');
const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req,res,next)=>{
    console.log("loading");
    next();
});
// app.use(express.json());

app.get('/video', function(req,res){
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
