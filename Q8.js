function racePromises(promises) {
    return new Promise((resolve,reject)=> {
        Promise.race(promises).then(result=>console.log(result))
        .catch(error=>console.log(error))
    })
}
const p1 = new Promise ((resolve,reject)=>{
    resolve("Promise 1 accepted!")
})
const p2 = new Promise((resolve,reject)=>{
    reject("Promise 2 rejected!")
})
const p3 = new Promise((resolve,reject)=>{
    resolve("Promise 3 resolved!")
})
const promises = [p1,p2,p3]
racePromises(promises).then(result=>{console.log(result)})
.catch(error=>{console.log(error)})