const legos = require('../../../data')

module.exports = function (id) {
    return new Promise ((resolve, reject) => {

        const lego = legos.find(lego => { lego.id === id})

        if(!lego) return reject(new Error('lego not found'))

        resolve(lego)
    })
}