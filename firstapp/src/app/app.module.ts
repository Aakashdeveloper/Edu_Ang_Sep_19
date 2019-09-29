import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { ProductComponent } from './products/product.component';

@NgModule({
    // All the module that you will create or
    // import will declare here
    // Routing will declare here
    imports: [
        BrowserModule
    ],

    // All the components and pipe
    declarations: [
        AppComponent,
        HomeComponent,
        ProductComponent
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
