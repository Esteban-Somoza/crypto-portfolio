import axios from "axios"

export default async function fetchAllTokens() {
    try {
        let tokens = await axios.get('https://api.coingecko.com/api/v3/coins/list')
        let accumulator = []
        tokens.data.forEach(token => accumulator.push(token.id))
        return accumulator
    } catch (error) {
        console.error(error)
    }
}
 