import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './products/product.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notFound.component';
import { OrderComponent } from './orders/order.component';
import { RouterGaurds } from './products/product-routerGaurds';


const routes: Routes = [
    {path: 'products', component: ProductComponent},
    {path: 'products/:id', canActivate: [RouterGaurds], component: ProductDetailsComponent},
    {path: 'home', component: HomeComponent},
    {path: 'orders', component: OrderComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    providers: [
        RouterGaurds
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
