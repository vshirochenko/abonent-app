import { DocType } from '../models/doc-type';

export class Constants {
    public static DOC_TYPES: DocType[] = [
        new DocType(1, 'Паспорт'),
        new DocType(2, 'Загран паспорт'),
        new DocType(3, 'Паспорт моряка')
    ];
}
