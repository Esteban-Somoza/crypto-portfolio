let db = require('../database/tokenHoldings.json')

const getTokens = async (req, res) => {
    try {
        return res.send({ db }).status(200)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = getTokens