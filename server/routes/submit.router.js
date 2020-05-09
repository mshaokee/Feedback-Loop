const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//POST ROUTER
router.post('/', (req, res) => {
    console.log('in POST');
    let newFeedback = req.body;
    let queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                       VALUES ($1, $2, $3, $4)`;
    pool.query(queryString, [newFeedback.feeling, newFeedback.understanding,
    newFeedback.support, newFeedback.comments]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error in POST router.');
        res.sendStatus(500);
    })

});//end POST

module.exports = router;