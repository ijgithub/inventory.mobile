import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../../models/configuration';
import { ItemTemplate } from '../../models/item-template.model';

/*
  Generated class for the ItemTemplatesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemTemplatesProvider {
  constructor(public http: HttpClient) {
    console.log('Hello ItemTemplatesProvider Provider');
  }

  list(): Promise<any> {
    const urlParts = [ AppSettings.apiBaseUrl, "templates"];
    const url = urlParts.join("/");

    return this.http.get(url).toPromise();
  }

  details(id: string | number): any {
    const urlParts = [ AppSettings.apiBaseUrl, "templates", id ];
    const url = urlParts.join("/");

    return this.http.get(url).toPromise();
  }

  create(itemTemplate: ItemTemplate): Promise<any> {
    const urlParts = [ AppSettings.apiBaseUrl, "templates" ];
    const url = urlParts.join("/");

    return this.http.post(url, itemTemplate).toPromise();
  }

  delete(id: number): Promise<any> {
    const urlParts = [ AppSettings.apiBaseUrl, "templates", id ];
    const url = urlParts.join("/");

    return this.http.delete(url).toPromise();
  }
}
