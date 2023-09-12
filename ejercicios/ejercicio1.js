

const ejercicio = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let aleatorio = Math.trunc((Math.random() * (100 - 1)));
            setTimeout(() => {
                let potencia  = Math.pow(aleatorio, 2)
                setTimeout(() => {
                    resolve(Math.sqrt(potencia))
                }, 1000);
            }, 3000);
        }, 2000);
    })
}


ejercicio().then(resp => console.log("Resultado: ", resp))