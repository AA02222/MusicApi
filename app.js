// 引入模块
const express = require("express");
// 引入每日推荐路由器
const RecommRouter = require("./routes/Recommended.js");
// 引入热门模块路由器
const HotRouter = require("./routes/hot")
//创建 仿音乐服务器端
const app = express();
//托管静态资源
app.use(express.static(__dirname + "/public"))
//使用中间件
app.use(express.urlencoded({
	extended: true
}))
//设置端口号
let port = 8000;
app.listen(port, () => {
	console.log("服务器已经启动了");
});


//为每日推荐添加前缀
app.use("/recommended", RecommRouter);
//添加前缀
app.use("/hot",HotRouter)


