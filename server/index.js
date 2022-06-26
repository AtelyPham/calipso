const express = require('express')
const next = require('next')
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")

const port = parseInt(process.env.PORT, 10) || 4000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const app = express()

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
    app.use('/',cors())
    app.use(morgan('common'))

    app.all('*', (req,res) => {
        return handle(req, res)
    })

    app.listen(port, (err) => {
        if(err) throw err
        console.log(`Ready on localhost:${port}`)
    })
})
