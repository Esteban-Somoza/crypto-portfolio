
const { Router } = require("express")
const router = Router()

let getTokens = require('../api/getTokens')
let getCoingeckoTokens = require('../api/getCoingeckoTokens.js')

router.get('/get', getTokens)
router.get('/getCoingeckoTokens', getCoingeckoTokens)

module.exports = router