$(function() {

    $.ajaxPrefilter(function(dd) {
        dd.url = 'http://www.liulongbin.top:3008' + dd.url


    })



})