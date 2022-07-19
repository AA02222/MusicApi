// 这是每日推荐接口
// 引入模块
const express = require("express");
const router = express.Router()
// 引入mysql
const pool = require("../mysql.js");

//随机获取每日推荐
router.get("/list", (req, res, next) => {
  let sql = "SELECT * FROM song "
  pool.query(sql,(err,success)=> {
    if(err) {
      next(err)
      return
    }
    if(success.length > 0) {
      // 定义一个初始数组
      let arr = [];
      // 遍历数组中的指
      for(let i = 0 ;i < 30 ; i++) {
        // 生成三十条随机数
        let random = Math.floor(Math.random()*success.length)+1;
        if(arr.indexOf(random) !== -1 ) {
          arr.splice(arr.indexOf(random),1)
          i--
        }
        arr.push(success[random])
      }
      res.send({
        code:200,
        msg:"OK",
        data:arr
      })
    }
  })
})


// 获取数据

// 单曲点击

// 导出模块
module.exports = router;
