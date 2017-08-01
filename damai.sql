DROP DATABASE if EXISTS dm;
CREATE DATABASE dm CHARSET=UTF8;
USE dm;
CREATE TABLE dm_user(
 uid  INT PRIMARY KEY AUTO_INCREMENT,
 uname VARCHAR(20) UNIQUE,
 upwd  VARCHAR(32),
 uvalid VARCHAR(10)
);
INSERT INTO dm_user VALUES(null,'tzw123','123456','');
INSERT INTO dm_user VALUES(null,'tony123','123456','');
INSERT INTO dm_user VALUES(null,'jack123','123456','');

CREATE TABLE dm_show(
 sid   INT PRIMARY KEY AUTO_INCREMENT,
 tid int,
 sname VARCHAR(200),
 sprice DECIMAL(10,2),
 pic   VARCHAR(100),
 splace VARCHAR(20),
 sdate Datetime
);
CREATE TABLE dm_showtype(
 tid   INT PRIMARY KEY AUTO_INCREMENT,
 tname VARCHAR(200)
);
INSERT INTO dm_showtype VALUES(null,'演唱会');
INSERT INTO dm_showtype VALUES(null,'音乐会');
INSERT INTO dm_showtype VALUES(null,'曲苑杂坛');
INSERT INTO dm_showtype VALUES(null,'话剧歌剧');
INSERT INTO dm_showtype VALUES(null,'体育比赛');
INSERT INTO dm_showtype VALUES(null,'舞台芭蕾');
INSERT INTO dm_showtype VALUES(null,'度假休闲');


CREATE TABLE dm_order(
  oid   INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  sid   INT,
  status   INT,
  count INT
);

INSERT INTO dm_order VALUES(null,1,1,2,1);
INSERT INTO dm_order VALUES(null,2,2,0,1);
INSERT INTO dm_order VALUES(null,3,3,1,1);


INSERT INTO dm_show VALUES
(null,1,'Ariana Grande 爱莉安娜 格兰德2017广州演唱会',480.00,'img/info/1.jpg','广州大剧院','2017/09/20');
INSERT INTO dm_show VALUES
(null,1,'2017周笔畅Not Typical巡回演唱会 广州站',580.00,'img/info/3.jpg','广州大剧院','2017/10/12');
INSERT INTO dm_show VALUES
(null,1,'【万有音乐系】“等待你出现”—小野丽莎2017圣诞演唱会',680.00,'img/info/4.jpg','广州大剧院','2017/09/21');
INSERT INTO dm_show VALUES
(null,1,'【万有音乐系】刘瑞琦“温暖的房间”2017巡回演唱会-广州站',580.00,'img/info/2.jpg','广州大剧院','2017/12/01');
INSERT INTO dm_show VALUES
(null,1,'MOTTO Anisong Festival 麽多动漫音乐节',180.00,'img/info/1-3.jpg','广州大剧院','2017/08/18');
INSERT INTO dm_show VALUES
(null,2,'百老汇原版音乐剧《修女也疯狂》',280.00,'img/info/1-2.jpg','广州大剧院','2017/10/15');
INSERT INTO dm_show VALUES
(null,2,'音乐后花园 加拿大爵士天后黛安娜 潘顿亚洲巡演广州站',380.00,'img/info/2-2.jpg','广州大剧院','2017/09/09');
INSERT INTO dm_show VALUES
(null,2,'皮亚佐拉探戈传奇——盖利安诺五重奏音乐会',180.00,'img/info/2-6.jpg','广州大剧院','2017/09/20');
INSERT INTO dm_show VALUES
(null,2,'音乐后花园 致敬舒伯特 王弢单簧管独奏音乐会',180.00,'img/info/2-1.jpg','广州大剧院','2017/08/30');
INSERT INTO dm_show VALUES
(null,2,'爱乐汇•“天空之城”久石让&宫崎骏经典动漫作品视听音乐会',80.00,'img/info/null.jpg','广州大剧院','2017/08/13');
INSERT INTO dm_show VALUES
(null,3,'2017广东戏曲喜剧特邀展滑稽戏《唐伯虎点秋香之三约牡丹亭》',50.00,'img/info/3-5.jpg','广州大剧院','2017/10/15');
INSERT INTO dm_show VALUES
(null,3,'2017广东戏曲名家特邀展黄梅戏歌舞《妹娃要过河》',50.00,'img/info/3-4.jpg','广州大剧院','2017/09/09');
INSERT INTO dm_show VALUES
(null,3,'2017广东戏曲喜剧特邀展滑稽戏《王老虎抢亲》',50.00,'img/info/3-3.jpg','广州大剧院','2017/09/20');
INSERT INTO dm_show VALUES
(null,3,'新编粤剧《还金记》',100.00,'img/info/3-1.jpg','广州大剧院','2017/08/30');
INSERT INTO dm_show VALUES
(null,3,'林觉民《与妻书》问世106周年 原创大型锡剧《卿卿如晤》',50.00,'img/info/3-6.jpg','广州大剧院','2017/08/13');
INSERT INTO dm_show VALUES
(null,4,'四季剧团经典家庭音乐剧《想变成人的猫》中文版',80.00,'img/info/4-6.jpg','广州大剧院','2017/10/15');
INSERT INTO dm_show VALUES
(null,4,'百老汇殿堂级传世之作音乐剧 《变身怪医》（Jekyll&Hyde）中文版广州站',220.00,'img/info/4-1.jpg','广州大剧院','2017/09/09');
INSERT INTO dm_show VALUES
(null,4,'托马斯和朋友——嘉年华来了',288.00,'img/info/4-7.jpg','广州大剧院','2017/09/20');
INSERT INTO dm_show VALUES
(null,4,'外百老汇音乐剧《谋杀歌谣》中文版',180.00,'img/info/4-1.jpg','广州大剧院','2017/08/30');
INSERT INTO dm_show VALUES
(null,4,'凡创文化 大型恐龙主题实景童话剧《你看起来好像很好吃》',160.00,'img/info/4-4.jpg','广州大剧院','2017/08/13');
INSERT INTO dm_show VALUES
(null,5,'QQRUN欢乐闯关跑——广州站',60.00,'img/info/5-4.jpg','广州大剧院','2017/10/15');
INSERT INTO dm_show VALUES
(null,5,'2017广州富力足球俱乐部年票',900.00,'img/info/5-2.jpg','广州大剧院','2017/09/09');
INSERT INTO dm_show VALUES
(null,5,'【小橙堡】神奇泡泡之科学音乐剧《爱迪生的泡泡实验室》',60.00,'img/info/5-6.jpg','广州大剧院','2017/09/20');
INSERT INTO dm_show VALUES
(null,5,'Ariana Grande 爱莉安娜 格兰德2017广州演唱会',480.00,'img/info/1.jpg','广州大剧院','2017/08/30');
INSERT INTO dm_show VALUES
(null,5,'十三号剧院“7月名著演出季”—《邯郸记》',80.00,'img/info/5-7.jpg','广州大剧院','2017/08/13');
INSERT INTO dm_show VALUES
(null,6,'新古典第一天团 蒙特卡洛芭蕾舞团《天鹅湖》',280.00,'img/info/6-1.jpg','广州大剧院','2017/10/15');
INSERT INTO dm_show VALUES
(null,6,'风靡全美潮流现代舞团—蔚蓝《巅峰时刻》',100.00,'img/info/6-5.jpg','广州大剧院','2017/09/09');
INSERT INTO dm_show VALUES
(null,6,'《跃动的大地》——广州歌舞剧院岭南舞蹈作品专场',80.00,'img/info/6-4.jpg','广州大剧院','2017/09/20');
INSERT INTO dm_show VALUES
(null,6,'立陶宛国家歌剧舞剧院芭蕾舞团《天鹅湖》',280.00,'img/info/6-3.jpg','广州大剧院','2017/08/30');
INSERT INTO dm_show VALUES
(null,6,'哈尔科夫国家剧院芭蕾舞团 芭蕾舞剧《舞姬》',100.00,'img/info/6-2.jpg','广州大剧院','2017/08/13');
INSERT INTO dm_show VALUES
(null,7,'长隆欢乐世界',175.00,'img/info/7-2.jpg','广州大剧院','2017/10/15');
INSERT INTO dm_show VALUES
(null,7,'“野生动物摄影奥斯卡大奖”中国巡回 广东站互动探险展',10.00,'img/info/7-5.jpg','广州大剧院','2017/09/09');
INSERT INTO dm_show VALUES
(null,7,'CCH广州国际餐饮连锁加盟展',20.00,'img/info/7-6.jpg','广州大剧院','2017/09/20');
INSERT INTO dm_show VALUES
(null,7,'MAG环球魔幻世界',94.00,'img/info/7-7.jpg','广州大剧院','2017/08/30');
INSERT INTO dm_show VALUES
(null,7,'《火影忍者》二次元实景展——广州站',68.00,'img/info/7-8.jpg','广州大剧院','2017/08/13');