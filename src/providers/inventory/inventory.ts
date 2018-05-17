import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../../models/configuration';

/*
  Generated class for the InventoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InventoryProvider {

  constructor(public http: HttpClient) {
    console.log('Hello InventoryProvider Provider');
  }


  listItems(): Promise<any> {
    const urlParts = [ AppSettings.apiBaseUrl, "inventory" ];
    const url = urlParts.join("/");

    return this.http.get(url).toPromise();
  }

}
