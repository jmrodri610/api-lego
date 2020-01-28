describe('test-retrieve lego', ()=> {
    it('should return a unique lego based on an id', ()=> {
        const id = 'njo533';

        retrieveLego(id)
            .then(lego => {
                expect(lego).to.exist
            })
    })
})