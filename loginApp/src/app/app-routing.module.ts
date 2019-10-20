import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { RegsiterFormComponent } from './register-form/registerForms.component';
import { LoginComponent } from './login-form/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileGaurdService } from './profile-gaurd.service';

const routes: Routes = [
    {path: 'register', component: RegsiterFormComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', canActivate: [ProfileGaurdService], component: ProfileComponent},
    {path: '', redirectTo: 'register', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports : [RouterModule],
    providers: [ProfileGaurdService]
})

export class AppRoutingModule {

}
