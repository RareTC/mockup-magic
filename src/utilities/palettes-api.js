import sendRequest from "./send-request";
const BASE_URL= '/api/palettes';

export async function fetchColors() {
    return await sendRequest(BASE_URL, 'POST')
}

export async function saveColors() {
    return await sendRequest(BASE_URL, 'POST')
}