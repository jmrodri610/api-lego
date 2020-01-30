const legos = require('../../../data')
const { errors: {ContentError} } = require('utils')


module.exports = function (id) {
    
    if (typeof id !== 'string') throw new TypeError (`${id} is not a string`)


    return (async () => {

        const lego = await legos.find(lego => lego.id === id)

        if(!lego) throw new Error('lego not found')

        return lego

    })()
}