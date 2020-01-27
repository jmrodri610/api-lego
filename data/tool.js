(async () => {

    const res = await fetch('https://brickset.com/minifigs/year-2019/page-2')

    const html = await res.text()

    const doc = new DOMParser().parseFromString(html, 'text/html')

    const toys = doc.querySelectorAll('.item')

    const results = []

    for (const toy of toys) {
        const element = {};

        const id = toy.querySelector('.tag').innerText
        const linkDetail = toy.querySelector('.itemname').querySelector('a').href
        debugger
        element.id = id
        element.linkDetail = linkDetail
        element.image = toy.querySelector('img').src
        element.description = toy.querySelector('.itemname').innerText

        element.price = await (async () => {
           const _id = id
           const res2 = await fetch(`https://brickset.com/ajax/minifigs/buy?m=${_id}`)
debugger

            const html2 = await res2.text()

            const doc2 = new DOMParser().parseFromString(html2, 'text/html')
debugger

            const prz = doc2.querySelector('.price').innerText

            debugger

            return prz

        })()
        
        results.push(element)

    }
    console.dir(results)
    console.log(JSON.stringify(results))

})()