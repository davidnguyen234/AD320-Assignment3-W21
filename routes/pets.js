const express = require('express');
const router = express.Router();

//fetch all pets
router.get('/', function(req, res, next) {
    let pet = require("../data/pets.json");
    res.json(pet)
});

//fetch pet by id
router.get('/:id', function(req, res, next) {
    let pet = require("../data/pets.json");
    let reqId = req.params.id;
    let response = {}

    pet.forEach(function(element){
        if (element.id == reqId) {
            response = element;
        } else {
            res.status(200)
        }

})
    res.json(response);
});

module.exports = router;


    


