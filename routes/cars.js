const express = require('express');
const router = express.Router();

//const app = express();
const cars = require('../data/cars.json');

router.get('/', (req, res, next) => {
    console.log(querystring.stringify());
    res.json(cars);
});

router.get('/:id', (req, res, next) => {

    res.json(cars.filter(car => car.id == parseInt(req.params.id)));

});


module.exports = router;