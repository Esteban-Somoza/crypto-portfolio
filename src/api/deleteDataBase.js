import axios from "axios";

export default async function deleteToken(body) {
    // console.log(body.token);
    return axios.put('http://localhost:3000/delete', {
        token: body.token
    })
}