const Tweeter = function () {
    
    const posts = [ // array of objects that oild the posts id , texr and comments that is array himself
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
        return posts //return all the posts array. log it if you want to see
    }

    const addPost = function (text) { // the function that handle the add post
        postIdCounter++ //post id counter incremnt by 1
        posts.push({ text: text, id: "p" + postIdCounter, comments: [] }) //pushing the new data to a new id and initial a comment array
    } //void method (dont return nothing)

    const removePost = function (id) { // the function htat handle removing post
        for (let i in posts) { //runs on the posts array
            if (posts[i].id === id) { // check if the parameter = the posts in position i id key
                posts.splice(i, 1) //if so , delete and send i as the start point and delet only 1
                break;//stop the code when you do that 
            }
        }
        postIdCounter-- // post id counter sub by 1
    }

    const addComment = function (id, text) { // the func that handle add comment
        commentIdCounter++ // post id counter increment by 1
        for (let i in posts) { //runs on the posts array
            if (posts[i].id === id) { // check if the parameter = the posts in position i id key
                posts[i].comments.push({ id: "p" + commentIdCounter, text: text })//pushing the new data with a new comment id and text 
            }
        }
    }

    const removeComment = function (postId, commentId) {//the func that handle with removing post
        for (let i in posts) { //runs on the posts array
            if (posts[i].id == postId) {// check if the parameter = the posts in position i id key
                for (j in posts[i].comments) {//run on the comment array of posts in position i
                    if (posts[i].comments[j].id == commentId) { // if comment in position j that is fount in posts position i = thae commentId parameter
                        posts[i].comments.splice(j, 1) //if so delete the comment from post in position i , send j(comment position) and delet 1 item
                        break
                    }
                }
            }
        }
    }

    return { getPosts, addPost, removePost, addComment, removeComment } // the method object

}

