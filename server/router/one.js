// 存放路由的文件
var express = require("express");
var router = express.Router()
var data = require("../mock/one.json")


router.get("/data", (req, res) => {
    res.send({
        msg: "我是one的路由地址", data
    })
})
// 暴露路由
module.exports = router;


