import { DocType } from '../models/doc-type';

export class DataConstants {
    public static DOC_TYPES: DocType[] = [
        new DocType(1, 'Паспорт'),
        new DocType(2, 'Загран паспорт'),
        new DocType(3, 'Паспорт моряка')
    ];

    public static MIN_ISSUE_DATE = new Date(1991, 0, 1);
}
