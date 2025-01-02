import { Component } from '@angular/core';

@Component({
  selector: 'app-all-claims',
  templateUrl: './all-claims.component.html',
  styleUrl: './all-claims.component.scss'
})
export class AllClaimsComponent {

  orders = [
    {
        orderNumber: '45123',
        orderDate: '7 December 2024',
        lastUpdateDate: '17 December 2024',
        amount: '$1,243.00',
        status: 'Settlement Pending',
        products: [
            {
                name: 'Water leak, minor damage',
                color: 'Plumbing',
                size: 'Small',
                price: '$50',
                deliveryDate: 'Complete on 17 December 2024',
                image: 'assets/demo/images/ecommerce/order-history/orderhistory-1.png'
            }
        ]
    },
    {
        orderNumber: '45126',
        orderDate: '9 February 2023',
        lastUpdateDate: '7 April 2023',
        amount: '$13,504.00',
        status: 'Completed',
        products: [
            {
                name: 'Roof repair, major damage',
                color: 'Roof',
                size: 'Large',
                price: '$9,400',
                deliveryDate: 'Complete on 7 April 2023',
                image: 'assets/demo/images/ecommerce/order-history/orderhistory-4.png'
            },
            {
                name: 'Window Damage and replacement',
                color: 'Windows',
                size: 'Small',
                price: '$200',
                deliveryDate: 'Complete on 7 March 2023',
                image: 'assets/demo/images/ecommerce/order-history/orderhistory-5.png'
            },
            {
                name: 'Carpet replacement',
                color: 'Furnishigs',
                size: 'Small',
                price: '$150',
                deliveryDate: 'Complete on 7 March 2023',
                image: 'assets/demo/images/ecommerce/order-history/orderhistory-6.png'
            },
        ]
    }
];
}
