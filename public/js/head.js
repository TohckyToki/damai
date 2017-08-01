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

	//我的订单
	$("#myOrder").click(function (e) {
		e.preventDefault();
		var uid = sessionStorage.getItem("uid") ? sessionStorage.getItem("uid") : false;
		if (uid) {
			location.href="myOrder.html";
		} else {
			toastr.error('很抱歉，您没有登录，没有进入订单页面的权限。请先登录，或者立即注册。');
		}
	});
});