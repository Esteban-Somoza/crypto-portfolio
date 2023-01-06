import axios from "axios";

export default async function getDataBase() {
    let dataBase = await axios.get('http://localhost:3000/get')
    return dataBase;
}