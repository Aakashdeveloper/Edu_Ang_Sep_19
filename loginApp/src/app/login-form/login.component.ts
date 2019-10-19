import { Component } from '@angular/core';
import { ILogin } from './login.model';
import { NgForm} from '@angular/forms';
import { LoginService } from './login.service';
import { Router} from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {

    mylogin  = new ILogin('', '');

    constructor(private loginService: LoginService,
                private router: Router) {}

    loginForm(form: NgForm): void {
        this.loginService.LoginUser(form.value)
            .subscribe((res) => this.loginService.getUserDetail(res['token'])
            .subscribe((response) => this.getUserRole(response['role']) ));
    }


    getUserRole(typeOfUser): void {
        localStorage.setItem('ROLE_TYPE', typeOfUser);
        this.router.navigate(['/profile']);
    }
}
