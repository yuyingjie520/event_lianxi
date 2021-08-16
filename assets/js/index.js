$(function() {
    getdata()
})



function getdata() {
    $.ajax({
        method: 'get',
        url: '/my/userinfo',
        success: function(res) {
            console.log(res);
            renderavatar(res.data)
        }
    })
}




function renderavatar(user) {
    var name = user.username || user.nickname

    $('#welcome').html('欢迎&nbsp&nbsp' + name)
    name = name[0].toUpperCase()
    $('.text-avatar').html(name)
    if (user.user_pic === null) {


        $('.layui-nav-img').hide()
        $('.text-avatar').show()
    }




}

$('#out').on('click', function() {
    layer.confirm('是否退出登录?', { icon: 3, title: '提示' }, function(index) {
        //do something
        localStorage.removeItem('token')
        location.href = 'login.html'

        layer.close(index);
    });

})