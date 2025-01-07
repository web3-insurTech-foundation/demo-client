import { Injectable } from '@angular/core';
import { ApiRx } from '@polkadot/api';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { Header } from '@polkadot/types/interfaces/runtime/types.d';

@Injectable({
  providedIn: 'root'
})
export class PolkadotService {
  api!: ApiRx;
  head:BehaviorSubject<any> = new BehaviorSubject<Observable<Header>|null>(null);

  constructor() {
    this.getNetworkHead();
  }

  getNetworkHead() {
    ApiRx.create()
      .pipe(
        switchMap((api) => {
          this.api = api;
          return this.api.rpc.chain.subscribeNewHeads();
        }
      ))
      .subscribe((header) => {
        this.head.next(header);
        console.log(`New block #${header.number.toNumber()}`);
      });
  }
}
