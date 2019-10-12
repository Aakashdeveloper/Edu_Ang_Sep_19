import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './prodduct.service';
import { IProduct } from './product.model';


@Component({
    templateUrl: './product-details.component.html'
})

export class ProductDetailsComponent implements OnInit {
    id: number;
    details: IProduct[];

    constructor(private route: ActivatedRoute,
                private productService: ProductService,
                private router: Router) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.productService.getProductDetails(this.id)
            .subscribe((data) => this.details = data);
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }
}


/*
name: string;
    desc: string;
    imageUrl: string;
this.route.queryParams
            .subscribe((data) => {
                this.name = data['name'];
                this.desc = data['details'];
                this.imageUrl = data['img'];
            });
    */
