const { Router } = require("express")
const router = Router()

let editToken = require('../api/editToken')

router.put('/edit', editToken)

module.exports = router