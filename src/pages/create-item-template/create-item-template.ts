import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { ItemTemplatesProvider } from '../../providers/item-templates/item-templates';
import { templateTypes, weaponTypes, materialTypes, armorTypes, TemplateType, getTemplateTypeTitle, weaponMaterialTypes } from '../../models/item-template.model';
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

  pageTitle = "Create a template";
  addAnother: boolean = false;
  isAddAnotherHidden: boolean = false;

  templateTypes: any[] = templateTypes;
  templateType: number = TemplateType.Weapon;

  cardUI: any = {};

  itemTemplateModel: any = {
    templateType: TemplateType.Weapon,
    itemType: "1",
    name: "",
    title: "",
    materialType: 3,
    value: 0,
  };

  valueLabelTitles: any = {};
  itemTypeLabels: any = {};
  itemTypes: any = {};
  materialTypes: any = {};

  loader: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provider: ItemTemplatesProvider,
    public loadingCtrl: LoadingController
  ) {
    this.valueLabelTitles[TemplateType.Weapon] = 'Damage';
    this.valueLabelTitles[TemplateType.Armor] = 'Defense';

    this.itemTypeLabels[TemplateType.Weapon] = 'Weapon Type';
    this.itemTypeLabels[TemplateType.Armor] = 'Armor Type';

    this.itemTypes[TemplateType.Weapon] = weaponTypes;
    this.itemTypes[TemplateType.Armor] = armorTypes;

    this.materialTypes[TemplateType.Weapon] = weaponMaterialTypes;
    this.materialTypes[TemplateType.Armor] = materialTypes;

    const ttype = this.itemTemplateModel.templateType;
    this._updateUI(ttype);
  }

  _handleTemplateTypeChange($event) {
    this.itemTemplateModel.templateType = +this.itemTemplateModel.templateType;
    this.itemTemplateModel.materialType = +this.itemTemplateModel.materialType;

    this._updateUI(this.itemTemplateModel.templateType);
  }

  _updateUI(ttype) {
    this.cardUI.title = getTemplateTypeTitle(ttype);
    this.cardUI.itemType = this.itemTypeLabels[ttype];
    this.cardUI.valueLabel = this.valueLabelTitles[ttype];
    this.cardUI.itemTypes = this.itemTypes[ttype];
    this.cardUI.materialTypes = this.materialTypes[ttype];

    if (ttype === TemplateType.Armor) {
      this.itemTemplateModel.itemType = "6";

    } else if (ttype === TemplateType.Weapon) {
      this.itemTemplateModel.itemType = "1";
      if (this.itemTemplateModel.materialType < 3) {
        this.itemTemplateModel.materialType = 3;
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateItemTemplatePage');
    var id = this.navParams.get('id');
    if (!id) return;
    this.isAddAnotherHidden = true;
    this.pageTitle = "Modify template";

    this.loader = this.loadingCtrl.create({
      content: "Loading item data ..."
    });

    this.loader.present();

    this.provider.details(id)
      .then(result => {
        this.itemTemplateModel = result;
        this.loader.dismiss();
      })
      .catch(error => {
        alert(error.message || error);
        this.loader.dismiss();
      });
  }

  _handleSave($event) {
    alert(JSON.stringify(this.itemTemplateModel, null, " "));

    this.provider.create(this.itemTemplateModel)
      .then(value => {
        if (this.addAnother) return;

        this.navCtrl.pop();
      })
      .catch(error => {
        alert(error.message || error);
      });

  }
}
