import sendRequest from "./send-request";
const BASE_URL= '/api/palettes';

export async function generatePalette() {
    return await sendRequest(BASE_URL, 'POST')
}

export async function savePalette(savedPalette) {
    return sendRequest(`${BASE_URL}/save`, 'POST', savedPalette)
}

export function getAllForUser() {
    return sendRequest(`${BASE_URL}/saved`);
}