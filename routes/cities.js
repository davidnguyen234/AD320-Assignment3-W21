const express = require('express');
const router = express.Router();
const myData = require('../data/cities.json');


router.get('/:id', function (req, res, next) {
    let myData = require('../data/cities.json');
    let reqID = req.params.id;
    for (let i = 0; i < myData.length; i++) {
        if (myData[i].id == reqID) {
            res.send(myData[i]);
        }
    }
});

module.exports = router;