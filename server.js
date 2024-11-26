const express = require('express');
const app = express()

let budget;
let envelopes = [];

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/envelopes', (req, res, next) => {
    console.log('Sending all envelopes...');
    res.status(200).send({envelopes: envelopes})
})

app.post('/api/envelopes', (req, res, next) => {
    const envelope = req.query.envelope;

    if (envelope) {
        envelopes.push(envelope)
        res.status(200).send({envelope: {envelope}});
    } else {
        res.status(404).send('Invalid envelope')
    }
})


app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
})