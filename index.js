const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('assets'));
app.use(bodyParser.json());

let messages = [];


app.get('/messages', function(req, res, next) {
    res.status(200).json({ messages: messages });
});

app.post('/messages', function(req, res, next) {
    console.log('trying to post')
    messages.push({ message: req.body.message, time: new Date(), username: req.body.username });
    $filter('date')
    res.status(200).json({ messages: messages })
})

app.listen(3000, function() {
    console.log('port 3000')
})