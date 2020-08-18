const Tweeter = function () {
    
    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let postIdCounter = 2 //count the number of total posts
    let commentIdCounter = 6 //count the number of total comments

    const getPosts = function () {
        return posts
    }

    const addPost = function (text) {
        postIdCounter++
        posts.push({ text: text, id: "p" + postIdCounter, comments: [] })
    }

    const removePost = function (id) {
        for (let i in posts) {
            if (posts[i].id == id) {
                posts.splice(i, 1)
                break;
            }
        }
        postIdCounter--
    }

    const addComment = function (id, text) {
        commentIdCounter++
        for (let i in posts) {
            if (id === posts[i].id) {
                posts[i].comments.push({ id: "p" + commentIdCounter, text: text })
            }
        }
    }

    const removeComment = function (postId, commentId) {
        for (let i in posts) {
            if (posts[i].id == postId) {
                for (j in posts[i].comments) {
                    if (posts[i].comments[j].id == commentId) {
                        posts[i].comments.splice(j, 1)
                    }
                }
            }
        }
    }

    return { getPosts, addPost, removePost, addComment, removeComment }

}

const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())


tweeter.removePost("p1")
console.log(tweeter.getPosts())


tweeter.addComment("p3", "Damn straight it is!")
tweeter.addComment("p2", "Second the best!")
console.log(tweeter.getPosts())

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())
