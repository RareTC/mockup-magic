import sendRequest from "./send-request";
const BASE_URL= '/api/palettes';

export async function fetchCategories() {
    return await sendRequest(`${BASE_URL}/category`)
}

export async function generatePalette(colorSelected, category) {
    return await sendRequest(BASE_URL, 'POST', colorSelected, category )
}

export async function savePalette(savedPalette) {
    return sendRequest(`${BASE_URL}/save`, 'POST', savedPalette)
}

export function getAllForUser() {
    return sendRequest(`${BASE_URL}/saved`);
}