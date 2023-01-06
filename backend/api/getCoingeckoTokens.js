let axios = require('axios');

const getCoingeckoTokens = async (req, res) => {
    try {
        let tokens = await axios.request('https://api.coingecko.com/api/v3/coins/list',
            { headers: { "Accept-Encoding": "gzip,deflate,compress" } })
        let accumulator = []

        tokens.data.forEach(token => accumulator.push(token.id))
        
        return res.send(accumulator).status(200)
    } catch (error) {
        console.log(error.request.res.statusMessage);
        return res.status(500).json(error.request.res.statusMessage)
    }
}

module.exports = getCoingeckoTokens