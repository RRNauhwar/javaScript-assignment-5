function getData() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data fetched successfully.")
        },2000)
    })
}
getData().then(result=>{console.log(result)})
.catch(error=>{console.log(error)})