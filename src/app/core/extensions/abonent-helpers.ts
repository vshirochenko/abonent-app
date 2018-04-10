import { Abonent } from '../models/abonent';
import { DocType } from '../models/doc-type';

export function cloneAbonent(abonent: Abonent): Abonent {
    return JSON.parse(JSON.stringify(abonent));
}