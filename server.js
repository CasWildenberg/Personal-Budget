const express = require('express');
const app = express()

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/helloWorld', (req, res, next) => {
    res.send({response: 'Hello world'})
})


app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
})