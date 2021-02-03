const express = require('express');
const router = express.Router();
const colorRouts = require('../data/colors.json');

router.get('/', function (req, res, next) {
    res.send(colorRouts);
});
 
//* code with "ok" output for out of array element//

// router.get('/:id', function (req, res, next) {
//     const indexNum = req.params.id;
//     const filtering = colorRouts.find((colorRout) => colorRout.id == indexNum);
//     if (filtering) {
//         res.json(filtering);
//     } else {
//         res.sendStatus(200);
//     }
// });
///////////////////////////////////////////////////

//* code with "{}" output for out of array element//

//****  Hi Bob, the else statement does not work here! without that else statement
/* it gives an empty array instead of 200 and everything else works. can you please 
tell me which part has issue? Thanks. **/

 router.get('/:id', function (req, res, next) {

    let Id = req.params.id;
    let obj = {}
    for (let i = 0; i < colorRouts.length; i++) {
        if (Id == colorRouts[i].id) {
            obj = colorRouts[i];
            
        }
//      else{
//             res.status(200).send('Ok');
//         }
 
    }
    res.send(obj)
});
module.exports = router;