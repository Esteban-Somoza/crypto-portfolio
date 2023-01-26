import axios from "axios"

let call = async (data) => {
    try {
        let dataForApiCall = data.map(token => token.token).toString()
        let price = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${dataForApiCall}&vs_currencies=usd&include_24hr_change=true`)
        let response = price.data
        let tokensData = data.map(token => ({ ...token,  change24hs: (response[token.token].usd_24h_change).toFixed(2), usd: response[token.token].usd, value: (response[token.token].usd * token.amount).toFixed(2)}))
        return tokensData

    } catch (error) {
        console.error(error)
    }
}


export default call