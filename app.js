const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        message: 'Hey, this is the backend'
    })
})

app.listen(3000)