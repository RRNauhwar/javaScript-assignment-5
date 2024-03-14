async function fetchData (api) {
   return fetch(api).then(response=>response.json())
}
fetchData("https://jsonplaceholder.typicode.com/todos/1")
.then(data=>{console.log(data)})
.catch(error=>console.log(error))