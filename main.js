const tweeter = Tweeter()
const renderer = Renderer()


renderer.renderPosts(tweeter.getPosts())


$('#post').on('click',function (){
    tweeter.addPost($('#input').val())
    renderer.renderPosts(tweeter.getPosts())

})

