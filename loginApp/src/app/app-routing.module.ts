import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { RegsiterFormComponent } from './register-form/registerForms.component';
import { LoginComponent } from './login-form/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {path: 'register', component: RegsiterFormComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '', redirectTo: 'register', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule {

}
