import { Abonent } from '../models/abonent';

export function cloneAbonent(abonent: Abonent): Abonent {
    const copy: Abonent = new Abonent();
    copy.id = abonent.id;
    copy.surname = abonent.surname;
    copy.docType = abonent.docType;
    copy.issueCountry = abonent.issueCountry;
    copy.issueDate = abonent.issueDate;
    copy.departmentCode = abonent.departmentCode;
    return copy;
}