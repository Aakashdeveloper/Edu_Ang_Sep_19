import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OrderComponent } from './orders/order.component';
import { NotFoundComponent } from './shared/notFound.component';
import { ProductModule } from './products/products.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    // All the module that you will create or
    // import will declare here
    // Routing will declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ProductModule,
        AppRoutingModule
    ],

    // All the components and pipe
    declarations: [
        AppComponent,
        HomeComponent,
        OrderComponent,
        NotFoundComponent
    ],

    // Only in the main module
    // Only first component
    bootstrap: [
        AppComponent
    ],

    // All services will declare here
    providers: []
})


export class AppModule {

}
