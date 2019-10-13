import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable()

export class FormPosterService {

    private url = 'http://localhost:3100/postEmployee';

    constructor(private http: HttpClient) {}

    employeeForm(employee): Observable<any[]> {
        console.log("in service", employee);
        return this.http.post<any[]>(this.url, employee);
    }
}
