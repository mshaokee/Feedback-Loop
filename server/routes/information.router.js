const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET ROUTER
router.get('/', (req, res) => {
    console.log('in server GET /information');
    let queryString = 'SELECT * FROM "feedback";'
    pool.query(queryString).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /information');
        res.sendStatus(500);
    });//end query
});//end GET


module.exports = router;