const { errors: { TypeError, NotFoundError, ContentError } } = require('utils')
const legos = require('../../../data')

module.exports = function (query) {
    debugger
    if (typeof query !== 'string') throw new TypeError(`${query} is not a string`)
    if (!query.trim()) throw new ContentError(`${query} is blank`)

    const _query = query.toLowerCase()

    return (async () => {

        const results = []

        legos.forEach(lego => {

            const item = Object.values(lego)
            
            let found = false

            item.forEach(prop => {
                if(prop.toLowerCase().includes(_query)) found = true
            })
            
            if (found) {
                results.push(lego)
            }
        });

        if(results.length < 1) throw new NotFoundError('this query has no results')
        
        return results

    })()
}