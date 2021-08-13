$(function() {
    $('.login-form #link-reg').on('click', function() {
        $('.login-form').hide()
        $('.reg-form').show()
    })
    $('.reg-form #link-login').on('click', function() {
        $('.login-form').show()
        $('.reg-form').hide()
    })



    // 注册表单
    var form = layui.form
    form.verify({
        pwd: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],

        repwd: function(value) {
            var rep = $('.reg-form [name=password]').val()

            if (value !== rep) {
                return '两次密码不一致'
            }

        }

    })


    //注册表单
    $('#reg-send').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
            method: 'POST',
            url: "/api/reg",
            data: $(this).serialize(),
            success: function(res) {

                if (res.code !== 0) {
                    return layer.msg(res.message)
                }
                layer.msg('注册成功，请登录！')

                $('#link-login').click()
            }

        })

    })

    //登录表单

    $('#login-send').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
            method: 'POST',
            url: "/api/login",
            data: $(this).serialize(),
            success: function(res) {

                if (res.code !== 0) {
                    return layer.msg(res.message)
                }

                localStorage.setItem('token', res.token)
                location.href = 'index.html'

            }

        })

    })
})