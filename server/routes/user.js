const express = require('express');
const users = require('../models/userModel');
const router = express.Router();

router.post('/', (req, res) => {
    
    users.find({username: req.body.username}, (err, data) => {
        if(data.length === 0){
            res.send({});
        } else {
            res.send(data);
        }
    });
    // let mdl = new users({username: "orizz", password: "123", id: 321});
    // mdl.save(err => {
    //     if(err) return err;
    //     console.log("saved");
    // })
        //res.redirect("https://www.google.com");
    //res.send(req.body.username);
})




module.exports = router;