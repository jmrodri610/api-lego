const express = require('express')
const { name, version } = require('./package.json')
const { listLego, retrieveLego } = require('./logic')

const api = express();

const { argv: [, , port = 8080] } = process

api.get('/legos', (req, res) => {

    try {

        listLego()
            .then(legos => res.json(legos))
            .catch(error => {
                const { message } = error

                res.status(500).json({ message })
            })
    } catch ({ message }) {
        res.status(400).json({ message })
    }
})

api.get('/lego/:id', (req, res) => {
    debugger
    const { params: { id } } = req
    try {
        retrieveLego(id)
            .then(lego => res.json(lego))
            .catch(error => {
                const { message } = error

                res.status(500).json({ message })
            })
    } catch ({ message }) {
        res.status(400).json({ message })
    }
})

api.listen(port, () => console.log(`${name} ${version} up and running on port ${port}`))
