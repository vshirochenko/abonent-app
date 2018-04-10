export function getRandomString(charsNumber: number): string {
    charsNumber = Math.max(charsNumber, 0);
    let text = '';
    const chars = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    for (let i = 0; i < charsNumber; i++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return text;
}

export function getRandomLongNumber(length: number): string {
    length = Math.max(length, 0);
    let longNumber = '';
    const chars = '1234567890';
    for (let i = 0; i < length; i++) {
        longNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return longNumber;
}
