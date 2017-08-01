/**
 * Created by Administrator on 2017/7/26.
 */
/*jshint esversion: 6 */
(function () {
	//注册验证
	var res={};
	$("#b-body input").focus(function () {
		$(this).css("outline", "1px solid #000");
		$(this).next().css("display", "block");
	});
	$("#b-body input").blur(function () {
		$(this).css("outline", "none");
		var type = $(this).attr("name");
		switch (type) {
			case "uname":
				{
					$this = $(this);
					var uname = $(this).val();
					if ((/^[a-zA-z0-9]{6,9}$/).test(uname)) {
						$.ajax({
							url: "/regNameChk",
							type: "post",
							data: {
								uname: uname
							},
							success: function (result) {
								console.log(result);
								var s=false;
								if (result.code === 1) {
									$this.next().css("color", "green");
									$this.next().text("用户名可用");
									res.name=true;
								} else {
									$this.next().css("color", "red");
									$this.next().text("用户名已经被注册,请重新输入");
									res.name=false;
								}
							}
						});
					} else {
						$(this).next().css("color", "red");
						$(this).next().text("用户名输入不正确,需要6-9位数字和字母组合.");
						res.name=false;
					}
					break;
				}
			case "upwd":
				{
					var upwd = $(this).val();
					if ((/^[a-zA-z0-9]{6,12}$/).test(upwd)) {
						$(this).next().css("color", "green");
						$(this).next().text("密码可用");
						res.pwd=true;
					} else if (upwd == "") {
						$(this).next().css("color", "red");
						$(this).next().text("密码不能为空");
						res.pwd=false;
					} else {
						$(this).next().css("color", "red");
						$(this).next().text("密码输入格式错误");
						res.pwd=false;
					}
					break;
				}
			case "upwd1":
				{
					var _upwd = $(this).closest("div").prev().children("input").val();
					console.log(_upwd);
					var upwd1 = $(this).val();
					if (!(/^[a-zA-z0-9]{6,12}$/).test(upwd1)) {
						$(this).next().css("color", "red");
						$(this).next().text("密码输入格式错误,请重新输入");
						res.pwd1=false;
					} else if (_upwd == "" || _upwd != upwd1) {
						$(this).next().css("color", "red");
						$(this).next().text("密码输入不一致,请重新输入");
						res.pwd1=false;
					} else if (_upwd == upwd1) {
						$(this).next().css("color", "green");
						$(this).next().text("密码输入正确");
						res.pwd1=true;
					}
					break;
				}
			case "valid":
				{
					break;
				}
		}
	});

	$("#btn-reg").click(function (e) {
		e.preventDefault();
		var result = true;
		for (var key in res) {
			if (!res[key]) {
				result = false;
				console.log("有错误");
				break;
			}
		}
		if (result) {
			var uname = $("#b-regbody input[name=uname]").val();
			var upwd = $("#b-regbody input[name=upwd]").val();
			var valid = $("#b-regbody input[name=valid]").val();
			$.ajax({
				url: "/reg",
				data: {
					uname: uname,
					upwd: upwd,
					valid: valid
				},
				type: "post",
				success: function (data) {
					if (data.code == 1) {
						toastr.success('注册成功!3秒后将返回登录界面.');
						setTimeout(function () {
							location.href = "login.html";
						}, 3000);
					} else {
						toastr.error('注册失败!');
					}
				}
			});
		}
	});
})();