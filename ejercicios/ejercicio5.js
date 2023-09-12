const cancelacion = () =>{
    let promise;
    let cancel = false;
    promise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(!cancel){
                resolve("Promesa cumplida")
            }else{
                resolve("Promesa cancelada")
            }
        }, 5000);
    }) 
    promise.cancel = () => cancel = true;
    return promise
}

let promesa = cancelacion();
setTimeout(() => {
    promesa.cancel()
}, 2000);

promesa.then(console.log)