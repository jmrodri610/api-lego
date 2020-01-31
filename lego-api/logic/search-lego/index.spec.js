const { expect } = require('chai')
const  searchLego = require('.')

describe.only('searchLego', () => {
    it('should return elements according to a query', async () => {
        const query = 'dragon'

        const results = await searchLego(query)

        expect(results).to.exist
        expect(results).to.be.instanceof(Array)
        expect(results[0]).to.be.instanceOf(Object)

    })

    it('should fail on no results', async ()=> {
        const query = 'ñ'

        try {

            await searchLego(query)

            throw Error('should not reach this point')
            
        } catch (error) {

            expect(error).to.exist
            expect(error.message).to.equal('this query has no results') 
            
        }

        
    })
})