import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myUpper.pipe';
import { DiscountPipe } from './products/discount.pipe';
import { ProductSearchPipe } from './products/productSearch.pipe';

@NgModule({
    // All the module that you will create or
    // import will declare here
    // Routing will declare here
    imports: [
        BrowserModule,
        FormsModule
    ],

    // All the components and pipe
    declarations: [
        AppComponent,
        HomeComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearchPipe
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
