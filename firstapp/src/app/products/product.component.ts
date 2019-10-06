import { Component, OnInit, OnChanges, OnDestroy} from '@angular/core';
import { ProductService } from './prodduct.service';
import { IProduct } from './product.model';

@Component({
    selector: 'app-prod',
    templateUrl: './product.component.html',
    // styles: ['h3{color:tomato}', '.texttitle{color:slateblue}']
    styleUrls : ['./product.component.css' ],
    styles: [
      `.online{
        background-color:wheat
      }`
    ]

})

export class ProductComponent implements OnInit, OnChange, OnDestroy {
    title: string = 'Products Page';
    showTable: boolean = false;
    imagewidth = 100;
    userSearch;
    serverStatus = 'offline';
    products: IProduct[];

    constructor(public productService: ProductService) {
      console.log('In side constructore');
      this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline' ;
    }

    ngOnChanges(): void {
      console.log('In side ngOnChanges');
    }

    ngOnDestroy() {
      console.log('In side ngOnDestroy');
    }

    getColor() {
      return this.serverStatus === 'Online' ? 'green' : 'red';
    }

    toggleImage(): void {
        this.showTable = !this.showTable;
    }

    ngOnInit() {
      console.log('In side ngOnInit');
      this.productService.getProducts()
        .subscribe((data) => this.products = data);
    }

    dataRecive(message: string) {
      this.title = 'Products Page>>> ' + message;
    }
}
