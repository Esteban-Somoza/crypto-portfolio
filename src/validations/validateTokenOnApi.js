export default function validateTokenOnApi(token, tokenList) {
    if (tokenList.includes(token)) return true;
    return false;
}