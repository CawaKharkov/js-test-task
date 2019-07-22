import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';

import {Element, ElementsImpl} from '../element.interface';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class DataService {

    private _elements$$: BehaviorSubject<Element[]> = new BehaviorSubject([]);
    private _elementsFiltered$: Observable<Element[]>;

    public query$$: BehaviorSubject<string> = new BehaviorSubject('');

    public get elementsFiltered$() {
        return this._elementsFiltered$
    }

    public get elements(): BehaviorSubject<Array<Element>> {
        return this._elements$$
    }

    constructor(private _http: HttpClient) {
        this._elementsFiltered$ = combineLatest(
            [this._elements$$, this.query$$]
        ).pipe(map(([elements, query]) => {
            return query ? elements.filter(
                element => element.Caption.includes(query)) : elements;

        }));
    }

    public getElements() {
        this._http.get(
            'https://apidata.mos.ru/v1/datasets?api_key=32a58ac9b521dbda0d65bede75377add&$skip=1&$top=20&$inlinecount=allpages',
            {headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})}
        ).subscribe(
            (elements: ElementsImpl) => {
                console.log('[GET]', elements);
                this._elements$$.next(elements.Items || []);
            },
            error => {
                console.log('[HTTP][ERROR]', error);
                return [];
            }
        )
    }


}
