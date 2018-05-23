import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateItemTemplatePage');
  }

  _handleSave($event) {
    alert(JSON.stringify(this.weaponModel, null, " "));
  }

}
