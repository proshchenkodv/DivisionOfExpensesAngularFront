import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Expense} from '../../shared/interfaces';
import {ExpenseOut} from '../../shared/interfaces';

import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class ExpensesService {
    constructor(private http: HttpClient) {
    }

    create(expense: ExpenseOut, id: string) {
        console.log('create(expense: ExpenseOut): ', expense, ' to event with id ', id);
        return this.http.post(`${environment.API_ENDPOINT}/api/v1/expense/addByEventId/${id}`, expense);
    }

    getAll(id: string): Observable<Expense[]> {
        console.log('http.get Expense (`${environment.API_ENDPOINT}/api/v1/expense/ByEventId/${id} ');
        const r: Observable<Expense[]> = this.http.get<Expense[]>(`${environment.API_ENDPOINT}/api/v1/expense/ByEventId/${id}`)
            .pipe(map((response) => response));
        console.log(r.toPromise());
        return r;

    }

    getById(id: string): Observable<Expense> {
        console.log('http.get Expense (`${environment.API_ENDPOINT}/api/v1/expense/${id} ', id);
        const r: Observable<Expense> = this.http.get<Expense>(`${environment.API_ENDPOINT}/api/v1/expense/${id}`)
            .pipe(
                map((expense: Expense) => expense));
        console.log(r.toPromise());
        return r;
    }


    remove(id: string): Observable<void> {
        return this.http.delete<void>(`${environment.API_ENDPOINT}/api/v1/expense/${id}`);
    }

    update(expense: Expense): Observable<Expense> {
        console.log('http.patch Exp (${environment.API_ENDPOINT}/api/v1/expense, expense )', expense);
        return this.http.patch<Expense>(`${environment.API_ENDPOINT}/api/v1/expense`, expense);
    }
}
