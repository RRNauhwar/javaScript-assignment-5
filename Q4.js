async function fetchData(url) {
    return fetch(url).then(response=>response.json())
}
fetchData("https://jsonplaceholder.typicode.com/todos/1").then(result=>console.log(result))
.catch(error=>console.log(error))