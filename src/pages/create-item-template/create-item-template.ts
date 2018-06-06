import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { ItemTemplatesProvider } from '../../providers/item-templates/item-templates';
import { templateTypes, weaponTypes, materialTypes, armorTypes } from '../../models/item-template.model';
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

  templateTypes: any[] = templateTypes;
  templateType: string = "armor";

  weaponTypes: any[] = weaponTypes;
  weaponType: string = "";

  materialTypes: any[] = materialTypes;

  weaponModel: any = {
    weaponType: 1,
    name: "",
    title: "",
    materialType: 3,
    damage: 0,
  };

  armorTypes: any[] = armorTypes;

  armorModel: any = {
    armorType: 1,
    name: "",
    title: "",
    materialType: 1,
    defense: 0,
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

    switch (this.templateType) {
      case 'weapon':
        this.provider.weaponDetails(id)
          .then(result => {
            this.weaponModel = result;
            this.loader.dismiss();
          })
          .catch(error => {
            alert(error.message || error);
            this.loader.dismiss();
          });
        break;

      case 'armor':
        this.provider.armorDetails(id)
          .then(result => {
            this.armorModel = result;
            this.loader.dismiss();
          })
          .catch(error => {
            alert(error.message || error);
            this.loader.dismiss();
          });
        break;
    }

  }

  _handleSave($event) {

    switch (this.templateType) {
      case 'weapon':
        alert(JSON.stringify(this.weaponModel, null, " "));

        this.provider.createWeapon(this.weaponModel)
          .then(value => {
            this.navCtrl.pop();
          })
          .catch(error => {
            alert(error.message || error);
          });
        break;

      case 'armor':
        alert(JSON.stringify(this.armorModel, null, " "));

        this.provider.createArmor(this.armorModel)
          .then(value => {
            this.navCtrl.pop();
          })
          .catch(error => {
            alert(error.message || error);
          });
        break;
      case 'craftingIngredient':
        break;
      case 'alchemyIngredient':
        break;
      case 'consumable':
        break;
    }



  }

}
