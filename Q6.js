async function fetchUserDataAndPosts (userID) {
    try{
        const userData = await(await fetch("https://jsonplaceholder.typicode.com/users/${userId}")).json()
        const userPosts = await(await fetch("https://jsonplaceholder.typicode.com/posts?userId=${userId}")).json()
        return {user: userData, posts: userPosts}
    }
    catch(error) {
        console.error('Error fetching user data and posts:', error);
        throw error
    }
}
const userID = 1
fetchUserDataAndPosts(userID)
.then((data)=>{
    console.log("User Data: ",data.user)
    console.log("User Posts: ",data.posts)
})
.catch((error)=>console.log)