/**
 * Created by Administrator on 2017/7/18.
 */
/*jshint esversion: 6 */
var express = require("express");
var qs = require("querystring");
var http = require("http");
var mysql = require("mysql");
var fs = require("fs");
var app = express();

var server = http.createServer(app).listen(8082);

var pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "dm",
    port: 3306,
    connectionLimit: 25
});
app.use(express.static("public"));
app.use(express.static("views"));
//跳转订单页面
app.get("/myOrder", (req, res) => {
    console.log(req.query.uid);
    var uid = req.query.uid;
    pool.getConnection((err, conn) => {
        var sql = "select o.oid,sname,sprice,sdate,count,status from dm_order o left join dm_user u on o.uid=u.uid left join dm_show s on o.sid=s.sid where o.uid=?";
        conn.query(sql, [uid], (err, result) => {
            if (err) throw err;
            if (result.length) {
                res.json({
                    code: 1,
                    cxt: result
                });
            } else {
                res.json({
                    code: -1,
                    msg: "您还没有相关的订单信息。"
                });
            }
        });
    });
});
//注册验证用户名
app.post("/regNameChk", (req, res) => {
    req.on("data", (data) => {
        var uname = qs.parse(data.toString()).uname;
        pool.getConnection((err, conn) => {
            if (err) throw err;
            var sql = "select * from dm_user where uname=?";
            conn.query(sql, [uname], (err, result) => {
                if (err) throw err;
                console.log(result.length);
                if (!result.length) {
                    res.json({
                        code: 1,
                        msg: "用户名可用"
                    });
                } else {
                    res.json({
                        code: -1,
                        msg: "用户名已经被注册,请重新输入"
                    });
                }
            });
        });
    });
});
//注册用户名
app.post("/reg", (req, res) => {
    req.on("data", (data) => {
        var uname = qs.parse(data.toString()).uname;
        var upwd = qs.parse(data.toString()).upwd;
        var uvalid = qs.parse(data.toString()).valid;
        pool.getConnection((err, conn) => {
            if (err) throw err;
            var sql = "insert into dm_user values (null,?,?,?)";
            conn.query(sql, [uname, upwd, uvalid], (err, result) => {
                if (err) throw err;
                if (result.affectedRows) {
                    res.json({
                        code: 1,
                        msg: "注册成功"
                    });
                } else {
                    res.json({
                        code: -1,
                        msg: "注册失败"
                    });
                }
            });
        });
    });
});


//登录用户名
app.post("/login", (req, res) => {
    req.on("data", (data) => {
        var uname = qs.parse(data.toString()).uname;
        var upwd = qs.parse(data.toString()).upwd;
        pool.getConnection((err, conn) => {
            if (err) throw err;
            var sql = "select * from dm_user where uname=? and upwd=?";
            conn.query(sql, [uname, upwd], (err, result) => {
                if (err) throw err;
                if (result.length) {
                    res.json({
                        code: 1,
                        msg: "登录成功",
                        uid: result[0].uid
                    });
                } else {
                    res.json({
                        code: -1,
                        msg: "登陆失败"
                    });
                }
            });
        });
    });
});


//主页分类列表的数据获取
app.post("/categaryList", (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) throw err;
        var list = {};
        var sql = "select * from dm_showtype t left join dm_show s on t.tid=s.tid where uname=? and upwd=?";
        conn.query(sql, [uname, upwd], (err, result) => {
            if (err) throw err;
            if (result.length) {
                res.json({
                    code: 1,
                    msg: "登录成功",
                    uid: result[0].uid
                });
            } else {
                res.json({
                    code: -1,
                    msg: "登陆失败"
                });
            }
        });
    });
});


//换一换功能
app.get("/refresh", (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) throw err;
        var sql = "select * from dm_show order by rand() limit 5";
        conn.query(sql, (err, result) => {
            if (err) throw err;
            res.json(result);
        });
    });
});