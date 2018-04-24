var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('prueba1')
    res.send('Prueba 1!');
});
app.get('/sendmessage', function (req, res) {
    res.send('Sending Message...');
    process.send({
        topic: 'intercom',
        data: {
            some: 'data'
        }
    });
});

app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});



process.on('message', function (packet) {
    if (packet.topic == 'intercom') {
        // Access to my data
        console.log(packet.data);
    }
});