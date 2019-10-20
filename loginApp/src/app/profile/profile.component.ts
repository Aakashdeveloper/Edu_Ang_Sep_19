import { Component , OnInit} from '@angular/core';
import {LoginService } from '../login-form/login.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {

    userinfo;
    token;

    constructor(private loginService: LoginService,
                private router: Router) {}

    ngOnInit() {
        this.token = localStorage.getItem('TOKEN_NUMBER');
        this.loginService.getUserDetail(this.token)
            .subscribe((res) => this.userinfo = res);
    }

    logoutuser(): void {
        localStorage.removeItem('TOKEN_NUMBER');
        localStorage.removeItem('ROLE_TYPE');
        this.router.navigate(['/login']);
    }

}


