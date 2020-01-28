const {expect} = require('chai')
const retrieveLego = require('.')

describe('retrieve lego', () => {
    it('should return a unique lego based on an id', async () => {
        const id = 'njo533';
        const lego = await retrieveLego(id)

        expect(lego).to.exist
        expect(lego.id).to.equal(id)
        expect(lego.image).to.exist
        expect(lego.linkDetail).to.exist
        expect(lego.description).to.exist
        expect(lego.price).to.exist
    })
    it('should fail on wrond search', async () => {
        const id = 'wrongID'

        try {
            
            await retrieveLego(id)

            throw Error('should not reach this point')
            
        } catch (error) {
           expect(error).to.exist
           expect(error.message).to.equal('lego not found') 
        }
    })
})