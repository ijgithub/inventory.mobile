import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InventoryProvider } from '../../providers/inventory/inventory';

/**
 * Generated class for the ManageInventoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-manage-inventory',
  templateUrl: 'manage-inventory.html',
})
export class ManageInventoryPage {
  itemCategory: string = 'weapons';
  items: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _provider: InventoryProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageInventoryPage');

    this._provider.listItems()
      .then(values => {
        this.items = values;
      })
      .catch(error => {
        alert(error);
      });
  }

}
