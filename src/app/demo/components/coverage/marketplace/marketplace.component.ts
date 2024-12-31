import { Component } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.scss'
})
export class MarketplaceComponent {

  color1: string = 'Bluegray';

    products =  [
        {
            name: 'Windstorm 4000',
            price: '$1,400.00',
            image: 'assets/demo/images/ecommerce/product-list/product-list-4-1.png'
        },
        {
            name: 'Roof Only - Named Storm Coverage',
            price: '$82.00',
            image: 'assets/demo/images/ecommerce/product-list/product-list-4-2.png'
        },
        {
            name: 'Home Coverage - Liability Only',
            price: '$54.00',
            image: 'assets/demo/images/ecommerce/product-list/product-list-4-3.png'
        },
        {
            name: 'Auto Complete Coverage',
            price: '$720.00',
            image: 'assets/demo/images/ecommerce/product-list/product-list-4-4.png'
        },
        {
            name: 'Pet and Animal Coverage',
            price: '$99.00',
            image: 'assets/demo/images/ecommerce/product-list/product-list-4-5.png'
        },
        {
            name: 'Personal Belongings Coverage',
            price: '$59.00',
            image: 'assets/demo/images/ecommerce/product-list/product-list-4-6.png'
        }
    ];

    products2 =  [
        {
            name: 'Windstorm Cat 5 ONLY',
            color: 'Bluegray',
            price : '$2,300',
            image:'assets/demo/images/ecommerce/product-list/product-list-2-1.png'
        },
        {
            name: 'Roof Only - Named Storm Coverage',
            color: 'Indigo',
            price : '$600',
            image:'assets/demo/images/ecommerce/product-list/product-list-2-2.png'
        },
        {
            name: 'Home Coverage - Liability Only',
            color: 'Purple',
            price : '$200',
            image:'assets/demo/images/ecommerce/product-list/product-list-2-3.png'
        },
        {
            name: 'Auto Complete Coverage',
            color: 'Cyan',
            price : '$600',
            image:'assets/demo/images/ecommerce/product-list/product-list-2-4.png'
        },
    ];
}

