const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    //res.send('Hello, Ricky!');
    res.render('index');
});

module.exports = router;