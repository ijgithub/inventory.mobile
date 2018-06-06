import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../../models/configuration';

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

  listWeapons(): Promise<any> {
    const urlParts = [ AppSettings.apiBaseUrl, "templates", "weapons" ];
    const url = urlParts.join("/");

    return this.http.get(url).toPromise();
  }

  weaponDetails(id: string | number): any {
    const urlParts = [ AppSettings.apiBaseUrl, "templates", "weapons", id ];
    const url = urlParts.join("/");

    return this.http.get(url).toPromise();
  }

  createWeapon(weaponTemplate: any): Promise<any> {
    const urlParts = [ AppSettings.apiBaseUrl, "templates", "weapons" ];
    const url = urlParts.join("/");

    return this.http.post(url, weaponTemplate).toPromise();
  }

  listArmors(): Promise<any> {
    const urlParts = [ AppSettings.apiBaseUrl, "templates", "armor" ];
    const url = urlParts.join("/");

    return this.http.get(url).toPromise();
  }

  armorDetails(id: string | number): any {
    const urlParts = [ AppSettings.apiBaseUrl, "templates", "armor", id ];
    const url = urlParts.join("/");

    return this.http.get(url).toPromise();
  }


  createArmor(armorTemplate: any): Promise<any> {
    const urlParts = [ AppSettings.apiBaseUrl, "templates", "armor" ];
    const url = urlParts.join("/");

    return this.http.post(url, armorTemplate).toPromise();
  }
}
