import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AppConfig,
  LayoutService,
} from 'src/app/layout/service/app.layout.service';



@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent implements OnInit, OnDestroy  {

  ngOnInit() {

  }

  ngOnDestroy() {

  }


}
