/*jshint esversion: 6 */
$(function () {
	if (sessionStorage.length != 0) {
		$("#top ul.top-left>li:nth-child(1)").html(`<li>Hi,${sessionStorage.getItem("uname")},欢迎来大麦网 <a href="#" class="logout">[退出登录]</a></li>`);
	}

	//退出登录按钮
	$("#top ul.top-left a.logout").click(function (e) {
		e.preventDefault();
		sessionStorage.clear();
		location.href = "index.html";
	});

	// top 栏的鼠悬停事件
	$("#top>div>ul>li").hover(function (e) {
		e.stopPropagation();
		$(this).children("div").toggleClass("collapse");
	});
});