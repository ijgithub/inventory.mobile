import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { RecipesProvider } from '../../providers/recipes-provider';
import { CreateRecipePage } from '../create-recipe/create-recipe';

/**
 * Generated class for the ManageRecipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-manage-recipes',
  templateUrl: 'manage-recipes.html',
})
export class ManageRecipesPage {

  loader: Loading;

  items: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _provider: RecipesProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageRecipesPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter manage-recipes templatesPage');

    this._refreshItems();
  }

  _refreshItems(): void {
    this.loader = this.loadingCtrl.create({
      content: "Loading items ..."
    });
    this.loader.present();

    this._provider.list()
      .then(itemTemplates => {
        itemTemplates.forEach(tmpItem => {
          this.items.push(tmpItem);
        });

        this.items = itemTemplates;
        this.loader.dismiss();
      })
      .catch(error => {
        alert(error.message || error);
        this.loader.dismiss();
      });
  }

  _handleNewRecipeButtonClick($event) {
    this.navCtrl.push(CreateRecipePage);
  }

  _handleEditRecipeButtonClick(item) {
    this.navCtrl.push(CreateRecipePage, { item: item });
  }

  _handleDeleteRecipeButtonClick(item) {
    this.loader = this.loadingCtrl.create({
      content: "Deleting item..."
    });
    this.loader.present();

    this._provider.delete(item)
    .then(result => {
      this.loader.dismiss();
      this._refreshItems();
    })
    .catch(error => {
      this.loader.dismiss();
      alert(error.message || error);
    });
  }

}
