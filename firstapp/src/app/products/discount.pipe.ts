import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'discount'
})

export class DiscountPipe implements PipeTransform {
    transform(value: number, offer: number): number {
        value = value - offer;
        return value;
    }
}
