// 存放路由的文件
let express = require("express");
let router = express.Router()

let twoData = require("../mock/two.json")
// 设置路由
router.get("/data", function (req, res) {
    res.send({
        msg: "我是第two接口",
        chartData: twoData
    })
})
// 暴露路由
module.exports = router