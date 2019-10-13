import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEmployee } from './employee.model';
import { FormPosterService } from './formPoster.service';

@Component({
    selector: 'app-employee',
    templateUrl: './employeeForm.component.html'
})

export class EmployeeComponent {
    constructor(private formPosterService: FormPosterService) { }
    languages: any[] = ['Angular', 'Node', 'Python', 'GoLang'];
    myEmp = new IEmployee('John', 'Eva', 'a@a.com', '123456', true, 'male' , 'Angular');
    hasCodeLangError: boolean = false;

    firstToUpper(value): void {
        if (value.length > 0) {
            this.myEmp.firstname = value.charAt(0).toUpperCase()
                                    + value.slice(1).toLowerCase();
        } else {
            this.myEmp.firstname = value;
        }
    }

    validateCodeLang(event): void {
        if (this.myEmp.codelang === 'default') {
            this.hasCodeLangError = true;
        } else {
            this.hasCodeLangError = false;
        }
    }

    submitForm(form: NgForm): void {
        console.log('>>>>>>>>', form.value);
        this.formPosterService.employeeForm(form.value)
        .subscribe((res) => console.log('data posted'));
    }
}
