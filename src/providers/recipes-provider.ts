import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../models/configuration';
import { Recipe } from '../models/recipes-model';

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

  create(recipeModel: Recipe): Promise<any> {
    const urlParts = [ AppSettings.apiBaseUrl, "recipes" ];
    const url = urlParts.join("/");

    return this.http.post(url, recipeModel).toPromise();
  }

  delete(recipe: any): Promise<any> {
    const urlParts = [ AppSettings.apiBaseUrl, "recipes", recipe.id];
    const url = urlParts.join("/");

    return this.http.delete(url).toPromise();
  }

}
