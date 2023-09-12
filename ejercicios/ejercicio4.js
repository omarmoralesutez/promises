const loopResolve = (num) =>{
    return new Promise((resolve, reject) =>{

        for (let i = 0; i < num; i++) {
            const response  = new Promise((resolve, reject) =>{
                setTimeout(() => {
                    console.log(i+1);
                    resolve(i+1)
                }, (i+1) * 1000);
            })
        }

        const response  = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve("Se resolvieron todas las promesas")
            }, num * 1000);
        })
        
        resolve(response);
    })
}

loopResolve(9).then(console.log)