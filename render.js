const Renderer = function () {

    const renderPosts = function (posts) {
        $('#posts').empty()
        console.log(posts);
        for (let post of posts) {
            let $post = `<div id='post' class='post'data-id='${post.id}'>${post.text}<div>`
            $('#posts').append($post)
            for (let comment of post.comments) {
                let $comment = `<div 'class='comments' data-id='${comment.id}'>${comment.text}</div>`
                $('#posts').append($comment)
            }
        }
    }

    return {renderPosts}
}