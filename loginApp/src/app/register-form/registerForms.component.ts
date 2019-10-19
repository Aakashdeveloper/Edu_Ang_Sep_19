import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEmployee } from './register.model';
import { RegisterService } from './register.service';

@Component({
    selector: 'app-employee',
    templateUrl: './registerForm.component.html'
})

export class RegsiterFormComponent {
    constructor(private registerService: RegisterService) { }

    myEmp = new IEmployee('John', 'a@a.com', '123456');

    submitForm(form: NgForm): void {
        console.log('>>>>>>>>', form.value);
        this.registerService.RegisterUser(form.value)
        .subscribe((res) => console.log('data posted'));
    }
}
