const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//DELETE ROUTER
router.delete('/:id', (req, res) => {
    //variables set to id, and string
    let data = req.params.id;
    let queryString = 'DELETE FROM "feedback" WHERE id=$1';
    pool.query(queryString, [data]).then((result)=>{
        console.log('feedback deleted');
        //send confirmation of change
        res.sendStatus(200);
    }).catch((error)=>{
        res.sendStatus(500);
    })
});

module.exports = router;