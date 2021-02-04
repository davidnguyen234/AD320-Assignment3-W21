const express = require('express');
const router = express.Router();

//fetch all users
router.get('/', function(req, res, next) {
    let user = require("..data/users.json");
    res.json(user)
});

//fetch user by id
router.get('/:id', function(req, res, next){
    let user = require("..data/users.json");
    let reqId = req.params.id;
    let response ={}

    user.forEach(function(item){
        if (item.id == reqId){
            response = item;
        } else {
            res.status(200)
        }
    })
    res.json(response);
});

module.exports = router;