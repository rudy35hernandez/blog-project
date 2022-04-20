



// renderPosts(){
//     let html = ''

//     for(let post of postsArray){
//         ``
//     }
// }

fetch("https://apis.scrimba.com/placeholder/posts")
    .then(requests => requests.json())
    .then(post => {
        const postsArr = data.slice(0, 5)
        let html = ""
        for(post of postsArr){
            html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
            `
        }
        document.getElementById("blog-list").innerHTML = html
    })


document.getElementById("new-post").addEventListener("submit", function(e){
    e.preventDefault()
    const postTitle = document.getElementById("post-title").value 
    const postBody = document.getElementById("post-body").value

    let postData = {
        title: postTitle,
        body: postBody
    }
})



fetch("https://apis.scrimba.com/placeholder/posts", {
    method: "POST",
    body: JSON.stringify()
})

