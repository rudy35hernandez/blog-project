



// renderPosts(){
//     let html = ''

//     for(let post of postsArray){
//         ``
//     }
// }

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(request => request.json())
    .then(data => {
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
        .then(data => console.log(data))

})