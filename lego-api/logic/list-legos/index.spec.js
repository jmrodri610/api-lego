const { expect } = require('chai')
const listLego = require('.')


describe('list a lego collection', () => {
    it('should return all elements of a lego collection', () => {
        listLego()
            .then(legos => {
                expect(legos).to.exist
                expect(legos).to.be.instanceOf(Array)
                legos.forEach(lego => {
                    expect(lego).to.exist
                    expect(lego).to.be.instanceOf(Object)

                })
            })
    })
})