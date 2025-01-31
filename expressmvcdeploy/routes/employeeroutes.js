const express = require("express")
const controller = require("E:\\OneDrive\\Documents\\dts\\command\\expressmvc\\controller\\apihandler.js")
const router = express.Router()

//router.route("/")
router.route("/getemployee")
.get(controller.getemployees)

router.route("/addemployee")
.post(controller.addemployee)

router.route("/remove/:id")
.delete(controller.removeemployee)

module.exports = router