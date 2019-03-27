const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/hi', (req, res) => { 
    console.log('router::hi');
    res.sendFile(path.resolve(__dirname, './public/index.html')); 
});

module.exports = router;
