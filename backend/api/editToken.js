// let db = require('../database/tokenHoldings.json')
const { writeFileSync } = require('fs')

const editToken = async (req, res) => {
    try {
        let dataBase = require('../database/tokenHoldings.json')
        let tokenToEdit = dataBase.find(t => t.token == req.body.token)

        tokenToEdit.token = req.body.token
        tokenToEdit.ticker = req.body.ticker
        tokenToEdit.amount = req.body.amount

        let save = JSON.stringify(dataBase, null, 2);
        writeFileSync('./database/tokenHoldings.json', save);
        return res.send('token added').status(200)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = editToken