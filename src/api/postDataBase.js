import axios from "axios";

export default async function postDataBase(body) {
    return axios.post('http://localhost:3000/add', {
        token: body.token,
        ticker: body.ticker,
        amount: +body.amount
    })
}