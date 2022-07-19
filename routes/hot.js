//这是热门音乐模块
const express = require("express")
const router = express.Router()
const pool = require("../mysql")

// 热门推荐模歌单
router.get("/list",(req,res,next)=>{
  let sql = "select * from lists ";
  pool.query(sql,(err,success)=> {
    if(err) {
      next(err)
      return;
    }
    console.log(success)
  })
})



// 暴露模块
module.exports = router