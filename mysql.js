// 引入Mysql模块
const mysql = require("mysql");
// 创建数据库连接池
const pool = mysql.createPool(
	host: "127.0.0.1",
	user: "root",
	password: "hhqweb99",
	database: "Muisc", // 连接要进入的数据库
	connectionLimit: 16, // 连接池的数量，默认15
	multipleStatements: true // 允许同时执行多条SQL命令
)

module.exports = pool;
