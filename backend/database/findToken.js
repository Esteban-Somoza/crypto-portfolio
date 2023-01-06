export default function token (database, token){
    let tokenToEdit = database.find(t => t.ticker == token)
    console.log(tokenToEdit);
    return tokenToEdit
}