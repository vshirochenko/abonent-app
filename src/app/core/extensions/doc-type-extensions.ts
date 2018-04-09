import { DocType } from '../models/doc-type';
import { DataConstants } from '../constants/const-data';


export function getRandomDocType(): DocType {
    return DataConstants.DOC_TYPES[Math.floor(Math.random() * DataConstants.DOC_TYPES.length)];
}
