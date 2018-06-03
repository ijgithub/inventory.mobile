import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { ItemTemplatesProvider } from '../../providers/item-templates/item-templates';

/**
 * Generated class for the CreateItemTemplatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-item-template',
  templateUrl: 'create-item-template.html',
})
export class CreateItemTemplatePage {

  templateTypes: any[] = [
    { title: "Weapon", value: "weapon" },
    { title: "Armor", value: "armor" },
    { title: "Crafting ingredient", value: "craftingIngredient" },
    { title: "Alchemy ingredient", value: "alchemyIngredient" },
    { title: "Consumable", value: "consumable" },
  ];

  templateType: string = "weapon";

  weaponTypes: any[] = [
    { title: "Short Sword", value: 1 },
    { title: "Long Sword", value: 2 },
    { title: "Two-handed Sword", value: 3 },
    { title: "Hatchet", value: 4 },
    { title: "Axe", value: 5 }
  ];

  weaponType: string = "";

  materialTypes: any[] = [
    { title: "Cloth", value: 1 },
    { title: "Leather", value: 2 },
    { title: "Iron", value: 3 },
    { title: "Steel", value: 4 }
  ];

  materialType: string = "";

  weaponModel: any = {
    weaponType: 1,
    name: "",
    title: "",
    materialType: 3,
    damage: 0,
  };

  loader: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provider: ItemTemplatesProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateItemTemplatePage');
    var id = this.navParams.get('id');
    if (!id) return;

    this.loader = this.loadingCtrl.create({
      content: "Loading item data ..."
    });

    this.loader.present();

    this.provider.weaponDetails(id)
      .then(result => {
        this.weaponModel = result;
        this.loader.dismiss();
      })
      .catch(error => {
        alert(error.message || error);
        this.loader.dismiss();
      });
  }

  _handleSave($event) {
    alert(JSON.stringify(this.weaponModel, null, " "));

    this.provider.createWeapon(this.weaponModel)
    .then(value => {
      this.navCtrl.pop();
    })
    .catch(error => {
      alert(error.message || error);
    });
  }

}
