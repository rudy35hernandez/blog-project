let postsArray = []





fetch("https://apis.scrimba.com/placeholder/posts")
    .then(requests => requests.json())
    .then(data => {
        console.log(data)
    })




