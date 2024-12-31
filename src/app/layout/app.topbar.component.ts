import { Component, ElementRef, ViewChild } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopbarComponent {

    @ViewChild('menuButton') menuButton!: ElementRef;

    @ViewChild('mobileMenuButton') mobileMenuButton!: ElementRef;

    @ViewChild('searchInput') searchInput!: ElementRef;

    constructor(public layoutService: LayoutService, public el: ElementRef) {}

    activeItem!: number;

    model: MegaMenuItem[] = [
        {
            label: 'InsurWeb DAO',
            items: [
                [
                    {
                        label: 'Management',
                        items: [
                            { label: 'Proposals', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                            { label: 'Voting', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                            { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
                            { label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'] },
                            { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] }
                        ]
                    }
                ],
                [
                  {
                    label: 'Governance',
                    items: [
                        { label: 'Proposals', icon: 'pi pi-fw pi-id-card', routerLink: ['utilities/icons'] },
                        { label: 'Voting', icon: 'pi pi-fw pi-check-square', url: 'https://www.primefaces.org/primeflex/', target: '_blank' }
                    ]
                  }
              ],
              [
                  {
                  label: 'System',
                  items: [
                      { label: 'Proposals', icon: 'pi pi-fw pi-id-card', routerLink: ['utilities/icons'] },
                      { label: 'Voting', icon: 'pi pi-fw pi-check-square', url: 'https://www.primefaces.org/primeflex/', target: '_blank' }
                  ]
              }
            ]
          ]
        },
        {
            label: 'SERVICES',
            items: [
                [
                    {
                        label: 'Governance',
                        items: [
                            { label: 'Proposals', icon: 'pi pi-fw pi-id-card', routerLink: ['utilities/icons'] },
                            { label: 'Voting', icon: 'pi pi-fw pi-check-square', url: 'https://www.primefaces.org/primeflex/', target: '_blank' }
                        ]
                    }
                ],
                [
                  {
                    label: 'Tasks',
                    items: [
                        { label: 'Open Tasks', icon: 'pi pi-fw pi-prime', routerLink: ['utilities/icons'] },
                        { label: 'Assigned Tasks', icon: 'pi pi-fw pi-desktop', url: 'https://www.primefaces.org/primeflex/', target: '_blank' },
                        { label: 'Closed Tasks', icon: 'pi pi-fw pi-bookmark', url: 'https://www.primefaces.org/primeflex/', target: '_blank' }
                    ]
                  }
              ],
                [
                  {
                    label: 'Network',
                      items: [
                          { label: 'Proposals', icon: 'pi pi-fw pi-id-card', routerLink: ['utilities/icons'] },
                          { label: 'Voting', icon: 'pi pi-fw pi-check-square', url: 'https://www.primefaces.org/primeflex/', target: '_blank' }
                      ]
                  }
              ]


            ]
        }
    ];

    get mobileTopbarActive(): boolean {
        return this.layoutService.state.topbarMenuActive;
    }

    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    onRightMenuButtonClick() {
        this.layoutService.openRightSidebar();
    }

    onMobileTopbarMenuButtonClick() {
        this.layoutService.onTopbarMenuToggle();
    }

    focusSearchInput(){
       setTimeout(() => {
         this.searchInput.nativeElement.focus()
       }, 0);
    }
}
