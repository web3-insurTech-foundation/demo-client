import { Injectable } from '@angular/core';
import { ApiRx } from '@polkadot/api';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolkadotService {
  api:  Promise<Observable<ApiRx | undefined>>;
  head = new BehaviorSubject<number>(0);

  constructor() {
    this.api = this.getApi();
  }

  async getApi(): Promise<Observable<ApiRx | undefined>> {
    const api = await ApiRx.create();
    return api;
  }

  getNetworkHead() {
    return this.api..rpc.chain.subscribeNewHeads().pipe(tap(
      ({ number }) => {
        this.head.next(number);
        console.log(`New head at block #${number}`)
      }
    ))
  }
}
