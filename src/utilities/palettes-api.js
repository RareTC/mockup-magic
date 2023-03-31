import sendRequest from "./send-request";
const BASE_URL= '/api/palettes';

export async function generatePalette(colorSelected) {
    console.log(colorSelected, 'have we made it to the API?')
    return await sendRequest(BASE_URL, 'POST', colorSelected )
}

export async function savePalette(savedPalette) {
    return sendRequest(`${BASE_URL}/save`, 'POST', savedPalette)
}

export function getAllForUser() {
    return sendRequest(`${BASE_URL}/saved`);
}