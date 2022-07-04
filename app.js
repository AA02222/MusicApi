// 引入模块
const express = require("express");
//创建 WEB服务器端
const app = express();
//设置端口号
app.listen(8081, () => {
	console.log("服务器已经启动了");
})
