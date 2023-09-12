const arrayGets = (array) =>{
    return new Promise(async(resolve, reject)=>{
        let peticiones = array.map((item) => (fetch(item)))
        let responses = await Promise.all(peticiones);
        let parseResponses = responses.map((item) => (item.json()))
        resolve(Promise.all(parseResponses))
    })
}

arrayGets(['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2'])
.then(resp => console.log(resp))