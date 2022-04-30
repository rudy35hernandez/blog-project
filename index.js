
let postsArr = []

function renderPosts(){
    let html = ""
    for(post of postsArr){
        html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr />
        `
    }
    document.getElementById("blog-list").innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(request => request.json())
    .then(data => {
        postsArr = data.slice(0, 5)
        renderPosts()
    })

const newPostForm = document.getElementById("new-post")

newPostForm.addEventListener("submit", function(e){
    e.preventDefault()
    const postTitle = document.getElementById("post-title").value 
    const postBody = document.getElementById("post-body").value

    const data = {
        title: postTitle,
        body: postBody
    }

    const option = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    
    }


    fetch("https://apis.scrimba.com/jsonplaceholder/posts", option)
        .then(request => request.json())
        .then(post => {
            postsArr.unshift(post)
            renderPosts()
            newPostForm.reset()
        })

})