import { NgModule } from '@angular/core';

import { ProductComponent } from './product.component';
import { MyUpperPipe } from './myUpper.pipe';
import { ProductSearchPipe } from './productSearch.pipe';
import { DiscountPipe } from './discount.pipe';
import { ProductDetailsComponent } from './product-details.component';
import { ProductService } from './prodduct.service';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    declarations: [
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearchPipe,
        ProductDetailsComponent
    ],
    providers: [
        ProductService
    ]
})


export class ProductModule {

}
