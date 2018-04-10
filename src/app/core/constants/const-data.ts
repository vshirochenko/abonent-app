import { DocType } from '../models/doc-type';
import { FieldType } from '../models/fieldType';

export class DataConstants {
    public static DOC_TYPES: DocType[] = [
        new DocType(1, 'Паспорт'),
        new DocType(2, 'Загран паспорт'),
        new DocType(3, 'Паспорт моряка')
    ];

    public static MIN_ISSUE_DATE = new Date(1991, 0, 1);

    public static FIELD_TYPES: FieldType[] = [
        new FieldType(1, 'Смена фамилии'),
        new FieldType(2, 'Смена типа документа'),
        new FieldType(3, 'Смена даты выдачи'),
        new FieldType(4, 'Смена кода подразделения')
    ];
}
