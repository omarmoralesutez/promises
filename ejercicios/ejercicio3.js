const promesa1 = ( ) =>{
    return new Promise((resolve, reject) =>{
        resolve("Hola")
    })
}

const promesa2 = ( ) =>{
    return new Promise((resolve, reject) =>{
        resolve("Mundo")
    })
}

const promesa3 = ( ) =>{
    return new Promise((resolve, reject) =>{
        resolve("!")
    })
}

let arrayFunciones =[
    promesa1(),
    promesa2(),
    promesa3()
]


const resolveFunctions = (array) =>{
    return new Promise((resolve, reject) =>{
        resolve(Promise.all(array))
    })
}

resolveFunctions(arrayFunciones).then(console.log)