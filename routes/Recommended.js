// 这是每日推荐接口
// 引入模块
const express = require("express");
const router = express.Router()
// 引入mysql
const pool = require("../mysql.js");

// 获取每日推荐模块
router.get("/", (req, res, next) => {
	let sql = "select * from Recommended";
	pool.query(sql, (err, success) => {
		if (err) {
			return next(err);
		}
		if (success.length > 0) {
			// 创建一个二维数组
			let arr = []
			// 创建一个小数组 长度为30
			let minArr = []
			success.forEach((item) => {
				// 判断小数组长度是否大于三十条，重新设置小数组长度
				if (minArr.length === 30) {
					minArr = []
				}
				//小数组长度为空，添加到二维数组中
				if (minArr.length === 0) {
					arr.push(minArr)
				}
				//向小数组添加数据
				minArr.push(item)
			})
			res.send({
				code: 200,
				msg: "ok",
				data: arr
			})
		} else {
			res.send({
				code: 201,
				msg: "error"
			})
		}
	})
})


// 导出模块
module.exports = router;
