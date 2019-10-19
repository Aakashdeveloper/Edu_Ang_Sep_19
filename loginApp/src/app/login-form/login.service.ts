import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ILogin} from './login.model';

@Injectable()

export class LoginService {

    private url = 'http://localhost:5000/api/auth/login';
    private userinfo = 'http://localhost:5000/api/auth/userinfo';

    constructor(private http: HttpClient) {}

    LoginUser(luser: ILogin): Observable<any[]> {
        console.log(luser);
        return this.http.post<any[]>(this.url, luser);
    }

    getUserDetail(token): Observable<any[]> {
        localStorage.setItem('TOKEN_NUMBER', token);
        return this.http.get<any[]>(this.userinfo, { headers: {'x-access-token': token}} );
    }
}
