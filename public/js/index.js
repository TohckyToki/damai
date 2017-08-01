/**
 * Created by Administrator on 2017/7/4.
 */
/*jshint esversion: 6 */
$(function () {
    if(sessionStorage.length!=0){
        $("#top ul.top-left>li:nth-child(1)").html(`<li>Hi,${sessionStorage.getItem("uname")},欢迎来大麦网 <a href="#" class="logout">[退出登录]</a></li>`);
    }

    //退出登录按钮
    $("#top ul.top-left a.logout").click(function(e){
        e.preventDefault();
        sessionStorage.clear();
        location.href="index.html";
    });

    // top 栏的鼠悬停事件
    $("#top>div>ul>li").hover(function (e) {
        e.stopPropagation();
        $(this).children("div").toggleClass("collapse");
    });
    //详细分类栏的菜单
    $("ul.dropdown>li").hover(function (e) {
        $(this).siblings().removeClass("active");
        $(this).children("div.playerList").toggle();
    });
    //轮播图
    var i = 1,
        n = 1,
        colors = ["#CDCAC3", "#090715", "#000", "#000000", "#000000", "#000", "#E9DDDD"];
    var $ul = $("#slide-ul");
    setInterval(function (e) {
        var $li = $("#slide-ul>li:nth-child(" + (i + 1) + ")");
        if (i < 7) {
            $li.toggleClass("active").siblings().removeClass("active");
            $ul.css("backgroundColor", colors[n++]);
            i++;
        } else {
            i = 1;
            n = 1;
            $("#slide-ul>li:nth-child(1)").toggleClass("active").siblings().removeClass("active");
            $ul.css("backgroundColor", colors[0]);
        }
    }, 3000);
    //轮播箭头显示切换
    $("#header div.slide").hover(function () {
        $("#header div.slide-indication > div.wrapper > a").toggle();
    });
    //news标签切换
    $("#news1 ul.head>li").mouseover(function (e) {
        var index = $(this).index("#news1 ul.head>li");
        $(this).addClass("active").siblings("li").removeClass("active");
        var _divInfo = $(this).closest("div.wrapper").find("div")[index];
        $(_divInfo).addClass("active").siblings("div").removeClass("active");
    });
});