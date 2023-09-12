const loopResolve = (num) =>{
    return new Promise((resolve, reject) =>{
        let promises = []
        for (let i = 0; i < num; i++) {
            const response  = new Promise((resolve, reject) =>{
                setTimeout(() => {
                    console.log(i+1);
                    resolve(i+1)
                }, (i+1) * 1000);
            })
            promises.push(response)
        }

        const response  = new Promise((resolve, reject) =>{
            setTimeout(() => {
                console.log("Se resolvieron todas las promesas");
                resolve("Se resolvieron todas las promesas")
            }, num * 1000);
        })
        promises.push(response)
        
        
        resolve(Promise.all(promises));
    })
}

loopResolve(2).then(console.log)