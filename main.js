const tweeter = Tweeter()
const renderer = Renderer()


renderer.renderPosts(tweeter.getPosts())

// add a post
$('#post').on('click', function () {
    const $input = $('#input')
    tweeter.addPost($input.val())
    renderer.renderPosts(tweeter.getPosts())
    $input.val(' ')

})
//remove a post
$('#posts').on('click', '.delete', function () {
    const $postId = $(this).closest('.post').data().id
    console.log($postId);
    tweeter.removePost($postId)
    renderer.renderPosts(tweeter.getPosts())
})
//add comment
$('#posts').on('click', '.comment-buttn', function () {
    const $post = $(this).closest('.post')
    const $input = $post.find('.c-input').val()
    tweeter.addComment($post.data().id, $input)
    renderer.renderPosts(tweeter.getPosts())
})
//remove comment
$('#posts').on('click', '.delete-comment', function () {
    const $com = $(this).closest('.comment').data().id
    const $post = $(this).closest('.post').data().id
    tweeter.removeComment($post, $com)
    renderer.renderPosts(tweeter.getPosts())
})

