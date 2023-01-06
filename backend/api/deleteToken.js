// let db = require('../database/tokenHoldings.json')
const { writeFileSync } = require('fs')

const deleteToken = async (req, res) => {
    try {
        let dataBase = require('../database/tokenHoldings.json')
        console.log(req.body.token);
        let newDataBase = dataBase.filter(token => token.token != req.body.token) 

        let save = JSON.stringify(newDataBase, null, 2);
        console.log(dataBase, save);
        writeFileSync('./database/tokenHoldings.json', save);
        return res.send('token deleted').status(200)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = deleteToken