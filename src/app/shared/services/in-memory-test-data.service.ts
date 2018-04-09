import { InMemoryDbService } from 'angular-in-memory-web-api';
import { generateAbonents } from './test-data-generator';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const abonents = generateAbonents(5);
        return { abonents };
    }
}

