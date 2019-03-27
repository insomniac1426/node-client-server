const express = require('express');
const app = express();
const PORT = 3000;
const api = require('./router');
const axios = require('axios');

app.get('/', (req, res) => {
    console.log('main::hi');
    res.send('hello');
});

app.use('/api', api);

app.post('/redirect', (req, res) => {
    console.log('main :: post :: Redirect');

    axios.get('http://localhost:3000/api/hi')
    .then(resRedirect => {
        res.send(resRedirect.data);
    })
    .catch(err => {
        console.log(err);
        res.json({err : err});
    })
});

app.listen(PORT, function(){
    console.log(`server running at port ${PORT}`);
});