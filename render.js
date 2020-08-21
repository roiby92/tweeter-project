const Renderer = function () {


    const createPost = function (id, text) {
        return `<div id=${id} class='post post-text' data-id='${id}'>
        ${text}
        <span class='delete'>Delete</span>
        </div>`
    }

    const createComment = function (id, text) {
        return `<div class='comment'  data-id='${id}'>
        <span class='delete-comment'>X</span>${text}</div>
        </div>`
    }

    const input = function(){
        const input  = `<input type="text" class='c-input'placeholder="Write your comment here...">`
        return input
    }

    const createAddCommet = function () {
        const buttn = "<button class='comment-buttn'>Add comment</button>"
        return buttn
    }

    const renderPosts = function (posts) {
        const $container = $('#posts')
        $container.empty()
        for (let i in posts) {
            $container.append(createPost(posts[i].id, posts[i].text))
            let myPost = $container.find(`#${posts[i].id}`)
            for (let j in posts[i].comments) {
                myPost.append(createComment(posts[i].comments[j].id, posts[i].comments[j].text))
            }
            myPost.append(input())
            myPost.append(createAddCommet())
        }
    }
    return { renderPosts }
}