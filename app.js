// 引入模块
const express = require("express");
// 引入每日推荐路由器
const RecommRouter = require("./routes/Recommended.js")
//创建 WEB服务器端
const app = express();
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
