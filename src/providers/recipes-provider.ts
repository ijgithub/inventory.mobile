import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../models/configuration';

@Injectable()
export class RecipesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RecipesProvider Provider');
  }

  list(): Promise<any> {
    const urlParts = [ AppSettings.apiBaseUrl, "recipes" ];
    const url = urlParts.join("/");

    return this.http.get(url).toPromise();
  }

}
