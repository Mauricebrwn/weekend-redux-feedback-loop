const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


//gets all information from database
router.get('/', (req, res) => {
    
    pool.query('SELECT * from "feedback";')
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

//sends information from client side to serverside database
router.post('/', (req, res) => {
    let feeling = req.body.feeling
    let understanding = req.body.understanding
    let support = req.body.support
    let comments = req.body.comments
    console.log(feeling);

    let sqlValues = [feeling, understanding, support, comments]

    let queryText = 
    'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")VALUES ($1, $2, $3, $4);'
    
    pool.query(queryText, sqlValues)
    .then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});



module.exports = router;