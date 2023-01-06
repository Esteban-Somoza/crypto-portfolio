const { Router } = require("express")
const router = Router()

let deleteToken = require('../api/deleteToken')

router.put('/delete', deleteToken)

module.exports = router