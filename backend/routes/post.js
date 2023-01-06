const { Router } = require("express")
const router = Router()

let addToken = require('../api/addToken')

router.post('/add', addToken)

module.exports = router