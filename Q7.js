// https://jsonplaceholder.typicode.com/todos/1
async function fetchMultipleData (APIs) {
    try{
      const data = Promise.all(APIs.map((api)=>fetch(api).then(response=>response.json())))
      return data
    }
    catch(error) {
        console.error('Error fetching multiple data:', error)
    }
}
const api1 = "https://jsonplaceholder.typicode.com/todos/1"
const api2 = "https://jsonplaceholder.typicode.com/todos/2"
const api3 = "https://jsonplaceholder.typicode.com/todos/3"
const APIs = [api1,api2,api3]
fetchMultipleData(APIs)
.then(result=>console.log(result))
.catch(error=>console.log(error))






