

const ejercicio = () => {
    return new Promise((resolve, reject) => {
        const promiseAleatorio = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Math.trunc((Math.random() * (100 - 1))))
            }, 2000);
        })

        promiseAleatorio.then((aleatorio) => {
            const promisePotencia = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(Math.pow(aleatorio, 2))
                }, 3000);
            })

            promisePotencia.then((potencia) => {
                const promiseRaiz = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(Math.sqrt(potencia))
                    }, 1000);
                })

                promiseRaiz.then((raiz) => {
                    resolve(raiz)
                })
            })
        })
    })
}


ejercicio().then(resp => console.log("Resultado: ", resp))