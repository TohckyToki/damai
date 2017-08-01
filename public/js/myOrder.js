/*jshint esversion: 6 */
$(function () {
	$("#top>div").load("header.html");
	$("#footer").load("footer.html");


	//表单获取
	(function () {
		var uid = sessionStorage.getItem("uid");
		console.log(uid);
		$.ajax({
			url: "/myOrder",
			data: {
				uid: uid
			},
			success: function (result) {
				if (result.code == -1) {
					toastr.error(result.msg);
				} else {
					console.log(result.cxt);
					var obj = result.cxt;
					var html = "";
					for (var i = 0; i < obj.length; i++) {
						html += `<tr>
								<td>${obj[i].oid}</td>
								<td>${obj[i].sname}</td>
								<td>${obj[i].sprice}</td>
								<td>${obj[i].sdate}</td>
								<td>${obj[i].status}</td>
								<td>操作</td>
							</tr>`;
					}
					$("#tbody").html(html);
				}
			}
		});
	})();

	//左侧导航样式切换
	$("#order div.left li:not(:nth-child(1))").click(function (e) {
		e.preventDefault();
		$(this).addClass("active").siblings("li").removeClass("active");
	});

});