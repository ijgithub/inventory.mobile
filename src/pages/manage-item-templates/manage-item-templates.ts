import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { ItemTemplatesProvider } from '../../providers/item-templates/item-templates';
import { CreateItemTemplatePage } from '../create-item-template/create-item-template';
import { getWeaponTypeTitle, getMaterialTypeTitle, getArmorTypeTitle } from '../../models/item-template.model';

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
  armors: any[] = [];
  loader: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _provider: ItemTemplatesProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter manage-item templatesPage');

    this.loader = this.loadingCtrl.create({
      content: "Loading items ..."
    });
    this.loader.present();

    const proms = [];
    proms.push(this._provider.listWeapons());
    proms.push(this._provider.listArmors());

    Promise.all(proms)
      .then(values => {
        let tmpItems = values[0];
        tmpItems.forEach(tmpItem => {
          tmpItem.weaponType = getWeaponTypeTitle(tmpItem.weaponType);
          tmpItem.materialType = getMaterialTypeTitle(tmpItem.materialType);
        });

        let tmpArmors = values[1];
        tmpArmors.forEach(tmpArmor => {
          tmpArmor.armorType = getArmorTypeTitle(tmpArmor.armorType);
          tmpArmor.materialType = getMaterialTypeTitle(tmpArmor.armorType);
        });

        this.items = tmpItems;
        this.armors = tmpArmors;
        this.loader.dismiss();
      })
      .catch(error => {
        alert(error.message || error);
        this.loader.dismiss();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageItemTemplatesPage');
  }

  public _handleNewItemButtonClick($event): void {
    this.navCtrl.push(CreateItemTemplatePage);
  }

  public _handleItemDetailClick($event): void {
    var id = $event.currentTarget.getAttribute("data-id");
    this.navCtrl.push(CreateItemTemplatePage, { id: id });
  }

}
