import axios from "axios";

export default async function postDataBase(body) {
    return axios.put('http://localhost:3000/edit', {
        token: body.token,
        ticker: body.ticker,
        amount: +body.amount
    })
}

