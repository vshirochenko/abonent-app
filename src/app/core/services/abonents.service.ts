import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Abonent } from '../models/abonent';
import { ApiURLs } from '../constants/api-urls';

@Injectable()
export class AbonentsService {
    private readonly _httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this._httpClient = httpClient;
    }

    query(id: string): Observable<Abonent> {
        return this._httpClient.get<Abonent>(`${ApiURLs.GET_ABONENTS_URL}/${id}`);
    }
}
