let express = require("express");
let app = express();
//设置跨域
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Request-With,yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    next();
})
// 引用路由文件
let chartOne = require("./router/one.js");
let chartTwo = require("./router/two.js");
let chartThree = require("./router/three.js");
let chartFour = require("./router/four.js");
let chartMap = require("./router/map.js");
// 中间件中使用路由
app.use("/one", chartOne)
app.use("/two", chartTwo)
app.use("/three", chartThree)
app.use("/four", chartFour)
app.use("/china", chartMap)
// 请求是localhost:8888/user/路由文件中的地址
app.listen(8888)
