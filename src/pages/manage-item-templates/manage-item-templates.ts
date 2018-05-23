import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemTemplatesProvider } from '../../providers/item-templates/item-templates';
import { CreateItemTemplatePage } from '../create-item-template/create-item-template';

/**
 * Generated class for the ManageItemTemplatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-manage-item-templates',
  templateUrl: 'manage-item-templates.html',
})
export class ManageItemTemplatesPage {

  items: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _provider: ItemTemplatesProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageItemTemplatesPage');

    this._provider.listWeapons().
      then(weapons => {
        this.items = weapons;
      }).catch(error => {
        alert(error.message || error);
      })
  }

  public _handleNewItemButtonClick($event): void {
    this.navCtrl.push(CreateItemTemplatePage);
  }

}
