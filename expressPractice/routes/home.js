const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
    res.send("<h1>hello express " + req.query['name']+"</h1>");
});

router.post('/',(req,res)=>{
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

module.exports = router;