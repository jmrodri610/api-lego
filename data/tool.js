(async () => {

    const results = []
    
        for (let i = 1; i < 6; i++) {
    
            const res = await fetch(`https://brickset.com/minifigs/year-2019/page-${i}`)
    
            const html = await res.text()
    
            const doc = new DOMParser().parseFromString(html, 'text/html')
    
            const toys = doc.querySelectorAll('.item')
    
            
    
            for (const toy of toys) {
                const element = {};
    
                const id = toy.querySelector('.tag').innerText
                //const linkDetail = toy.querySelector('.itemname').querySelector('a').href
            
                const image = toy.querySelector('a').href
            
                element.id = id
                element.image = image
            
                element.thumbnail = toy.querySelector('.thumbnail').src
            
                element.description = toy.querySelector('.itemname').innerText
    
                element.price = await (async () => {
                    const _id = id
                    const res2 = await fetch(`https://brickset.com/ajax/minifigs/buy?m=${_id}`)
                    
    
                    const html2 = await res2.text()
    
                    const doc2 = new DOMParser().parseFromString(html2, 'text/html')
                    
    
                    const prz = doc2.querySelector('.price')
    
                    if (prz) {
                   
                        return prz.innerText
                    
                    } else {
                        prz = "N/A"
                        return prz
                    }
                    
    
                })()
    
                results.push(element)
    
            }
        }
    
        console.dir(results)
        console.log(JSON.stringify(results))
    
    })()