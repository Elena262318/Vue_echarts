// 存放路由的文件
let express = require("express");
let router = express.Router()

let threeData = require("../mock/three.json")
// 设置路由
router.get("/data", function (req, res) {
    res.send({
        msg: "我是第three接口",
        chartData: threeData
    })
})
// 暴露路由
module.exports = router