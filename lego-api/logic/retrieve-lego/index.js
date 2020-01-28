const legos = require('../../../data')

module.exports = function (id) {
    return (async () => {

        const lego = await legos.find(lego => lego.id === id)

        if(!lego) throw new Error('lego not found')

        return lego

    })()
}