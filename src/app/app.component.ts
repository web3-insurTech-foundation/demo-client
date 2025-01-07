import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService, AppConfig } from './layout/service/app.layout.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig, private layoutService: LayoutService) { }

  ngOnInit(): void {
      this.primengConfig.ripple = true;       //enables core ripple functionality

      //optional configuration with the default configuration
      const config: AppConfig = {
          ripple: false,                      // toggles ripple on and off
          inputStyle: 'outlined',             // default style for input elements
          menuMode: 'static',                 // layout mode of the menu, valid values are "static", "overlay", "slim", "horizontal", "drawer" and "reveal"
          colorScheme: 'light',               // color scheme of the template, valid values are "light" and "dark"
          componentTheme: 'indigo',           // default component theme for PrimeNG
          scale: 14,                           // size of the body font size to scale the whole application
          menuTheme: 'light',                 // theme of the menu
          topbarTheme: 'white',               // theme of the topbar
          menuProfilePosition: 'end',         // position of the profile menu inside the main menu, valid values are "start" and "end"
      };
      this.layoutService.config.set(config);
  }
}
