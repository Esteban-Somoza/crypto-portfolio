import axios from "axios";

export default async function getCoingeckoTokens() {
    try {
        let allTokens = await axios.request('http://localhost:3000/getCoingeckoTokens')
        return allTokens.data;
    } catch (error) {
        console.error(error.response);   
    }
}