import {
    Abonent,
    getRandomString,
    getRandomDocType,
    getRandomDateTime,
    DataConstants,
    getRandomLongNumber
} from '../../core';

// Generate random data for in-memory-web-api
export function generateAbonents(count: number): Abonent[] {
    const abonents: Abonent[] = [];
    count = Math.max(count, 0);
    for (let i = 0; i < count; i++) {
        const abonent = new Abonent();
        abonent.id = i.toString();
        abonent.surname = getRandomString(10);
        abonent.docType = getRandomDocType();
        abonent.issueCountry = getRandomString(7);
        abonent.issueDate = getRandomDateTime(DataConstants.MIN_ISSUE_DATE, new Date());
        abonent.departmentCode = getRandomLongNumber(7);
        abonents.push(abonent);
    }
    return abonents;
}
