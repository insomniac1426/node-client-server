const express = require('express');
const clientApp = express();
const CLIENT_PORT = 3001;
const axios = require('axios');

clientApp.post('/', function(req, res) {
    axios.post('http://localhost:3000/redirect')
    .then(serverRes => {
        res.send(serverRes.data)
    })
    .catch(err => {
        res.json({ clienterr: err });
    })
})

clientApp.listen(CLIENT_PORT, () => console.log(`listening on port ${CLIENT_PORT}`));