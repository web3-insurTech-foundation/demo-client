import { Component } from '@angular/core';

@Component({
  selector: 'app-investment-marketplace',
  templateUrl: './investment-marketplace.component.html',
  styleUrl: './investment-marketplace.component.scss'
})
export class InvestmentMarketplaceComponent {

  color1: string = 'Bluegray';

    products =  [
        {
            name: 'Windstorm Ultra High',
            description: 'High risk property coverage within 5 miles of coast',
            price: '15.0%',
            capitalization: '$20.0B',
            ratio: 56,
            image: 'assets/demo/images/ecommerce/product-list/windstorm-4000.jpg',
            category: 'Windstorm'
        },
        {
            name: 'Roof Only - Named Storm Coverage',
            description: 'Roof only coverage for named storms',
            price: '6.8%',
            capitalization: '$10.0B',
            ratio: 80,
            image: 'assets/demo/images/ecommerce/product-list/roof-plan.jpg',
            category: 'Windstorm'
        },
        {
            name: 'Home Coverage - Liability Only',
            description: 'Liability only coverage for home',
            price: '3.9%',
            capitalization: '$1.1B',
            ratio: 97,
            image: 'assets/demo/images/ecommerce/product-list/complete-home-liability.jpg',
            category: 'Property'
        },
        {
            name: 'Auto Complete Coverage',
            description: 'Complete coverage for car',
            price: '6.5%',
            capitalization: '$120.0B',
            ratio: 45,
            image: 'assets/demo/images/ecommerce/product-list/complete-car.jpg',
            category: 'Vehicle'
        },
        {
            name: 'Pet and Animal Coverage',
            description: 'Complete coverage for pet and animal',
            price: '12.5%',
            capitalization: '$800M',
            ratio: 13,
            image: 'assets/demo/images/ecommerce/product-list/pet-care.jpg',
            category: 'Animal'
        },
        {
            name: 'Personal Belongings Coverage',
            description: 'Complete coverage for personal belongings',
            price: '8.5%',
            capitalization: '$2.0B',
            ratio: 77,
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
