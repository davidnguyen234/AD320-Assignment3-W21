const express = require('express');
const router = express.Router();
let cities = require('../data/cities.json');

// Endpoint for /cities
router.get('/',function (req, res, next) {
    res.send(cities);
});

// Endpoint for /cities/{id}
router.get('/:id', function (req, res, next) {
    
    // Finds the id using the array.find() method
    let found = cities.find(element => element.id == req.params.id);
    if(found){
        res.send(found);
    } else {
        res.send({});
    }
});

module.exports = router;