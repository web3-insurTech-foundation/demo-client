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
            image: 'assets/demo/images/ecommerce/product-list/windstorm-4000.jpg',
            category: 'Windstorm'
        },
        {
            name: 'Roof Only - Named Storm Coverage',
            price: '$82.00',
            image: 'assets/demo/images/ecommerce/product-list/roof-plan.jpg',
            category: 'Windstorm'
        },
        {
            name: 'Home Coverage - Liability Only',
            price: '$54.00',
            image: 'assets/demo/images/ecommerce/product-list/complete-home-liability.jpg',
            category: 'General'
        },
        {
            name: 'Auto Complete Coverage',
            price: '$720.00',
            image: 'assets/demo/images/ecommerce/product-list/complete-car.jpg',
            category: 'Vehicle'
        },
        {
            name: 'Pet and Animal Coverage',
            price: '$99.00',
            image: 'assets/demo/images/ecommerce/product-list/pet-care.jpg',
            category: 'Animal'
        },
        {
            name: 'Personal Belongings Coverage',
            price: '$59.00',
            image: 'assets/demo/images/ecommerce/product-list/personal-items.jpg',
            category: 'Personal'
        }
    ];

    products2 =  [
        {
            name: 'Windstorm Cat 5 ONLY',
            color: 'Bluegray',
            price : '$2,300',
            image:'assets/demo/images/ecommerce/product-list/windstorm-4000.jpg'
        },
        {
            name: 'Roof Only - Named Storm Coverage',
            color: 'Indigo',
            price : '$600',
            image:'assets/demo/images/ecommerce/product-list/roof-plan.jpg'
        },
        {
            name: 'Home Coverage - Liability Only',
            color: 'Purple',
            price : '$200',
            image:'assets/demo/images/ecommerce/product-list/complete-home-liability.jpg'
        },
        {
            name: 'Auto Complete Coverage',
            color: 'Cyan',
            price : '$600',
            image:'assets/demo/images/ecommerce/product-list/complete-car.jpg'
        },
    ];
}

