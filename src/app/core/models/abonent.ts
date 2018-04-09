import { DocType } from './doc-type';

export class Abonent {
    id: string;
    surname: string;
    docType: DocType;
    issueCountry: string;
    issueDate: Date;
    departmentCode: string;
}
