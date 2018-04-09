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
        abonents.push({
            id: i.toString(),
            surname: getRandomString(10),
            docType: getRandomDocType(),
            issueCountry: getRandomString(7),
            issueDate: getRandomDateTime(DataConstants.MIN_ISSUE_DATE, new Date()),
            departmentCode: getRandomLongNumber(7)
        });
    }
    return abonents;
}
