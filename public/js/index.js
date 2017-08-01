/**
 * Created by Administrator on 2017/7/4.
 */
/*jshint esversion: 6 */
$(function () {
    $("#top>div").load("header.html");
    $("#footer").load("footer.html");
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
    }, 2500);
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

//页面数据加载
$(function () {
    //分类列表图文加载
    $.ajax({
        url:"/categaryList",
        success:function(result){
            console.log(result);
        }
    });
});