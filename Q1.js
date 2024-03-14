function sumAsync(num1,num2) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num1+num2)
        },1000)
    })
}
sumAsync(2,3)
.then(result=>{console.log(result)})
.catch(error=>{console.log(error)})