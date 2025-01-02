import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.scss'
})

export class PoliciesComponent implements OnInit, OnDestroy {
  constructor() { }

  policies = [
    {
      orderNumber: '45123',
      orderDate: '8 February 2024',
      propertyAddress: '1234 Main St, Springfield, IL 62701',
      amount: '$2,630.00',
      products: [
        {
          name: 'Named Windstorm & Flood Insurance',
          color: '$500k Comprensive',
          size: '5% Deductible',
          price: '$1,500',
          deliveryDate: 'In Effect until 7 February 2025',
          image: 'assets/demo/images/ecommerce/order-history/orderhistory-1.png'
        },
        {
          name: 'Car Insurance',
          color: '2022 Nissan Sentra - White',
          size: '$500 Deductible',
          price: '$500',
          deliveryDate: 'In Effect until 7 February 2025',
          image: 'assets/demo/images/ecommerce/order-history/orderhistory-2.png'
        },
        {
          name: 'Extended Home Warranty',
          color: 'Complete Home',
          size: '$150 Deductible',
          price: '$630',
          deliveryDate: 'In Effect until 7 February 2025',
          image: 'assets/demo/images/ecommerce/order-history/orderhistory-3.png'
        },
      ]
    },
    {
      orderNumber: '45126',
      orderDate: '10 March 2023',
      propertyAddress: '75 Ansley St, Atlanta, GA 30309',
      amount: '$800.00',
      products: [
        {
          name: 'General Liability Insurance',
          color: '$100k Combined Coverage',
          size: '$1,000 Deductible',
          price: '$800',
          deliveryDate: 'In Effect until 9 March 2025 ',
          image: 'assets/demo/images/ecommerce/order-history/orderhistory-4.png'
        }
      ]
    }
  ];

  ngOnInit() {
  }

  ngOnDestroy(): void {

  }

}
