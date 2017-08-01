/**
 * Created by Administrator on 2017/7/26.
 */
/*jshint esversion: 6 */
(function () {
	//登录界面
	$("#btn-login").click(function (e) {
		var ipt_name = $("form.b-login input[name=uname]");
		var ipt_pwd = $("form.b-login input[name=upwd]");
		if (!(/^[a-zA-z0-9]{6,9}$/).test(ipt_name.val())) {
			toastr.error('用户名格式不正确,需要6-12位数字和字母组成');
		} else {
			$.ajax({
				url: "/login",
				type: "post",
				data: {
					uname: ipt_name.val(),
					upwd: ipt_pwd.val()
				},
				success: function (result) {
					if (result.code == 1) {
						sessionStorage.setItem("uname", ipt_name.val());
						sessionStorage.setItem("upwd", ipt_pwd.val());
						sessionStorage.setItem("uid", result.uid);
						toastr.success('登录成功,3s后将返回主页');
						setTimeout(function () {
							location.href = "index.html";
						}, 3000);
					} else {
						toastr.error('登陆失败,请检查用户名或密码.');
					}
				}
			});
		}
	});
})();