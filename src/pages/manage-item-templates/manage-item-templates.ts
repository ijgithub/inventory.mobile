import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { ItemTemplatesProvider } from '../../providers/item-templates/item-templates';
import { CreateItemTemplatePage } from '../create-item-template/create-item-template';
import { getItemTypeTitle, getMaterialTypeTitle, ItemTemplate } from '../../models/item-template.model';

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

  items: ItemTemplate[] = [];
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

    this._refreshItems();
  }

  _refreshItems(): void {
    this.loader = this.loadingCtrl.create({
      content: "Loading items ..."
    });
    this.loader.present();

    this._provider.list()
      .then(itemTemplates => {
        // const itemTemplatesArr: ItemTemplate[] = [];


        itemTemplates.forEach(tmpItem => {
          // const iTempl: ItemTemplate = new ItemTemplate();
          // iTempl.id = tmpItem.id;
          // iTempl.templateType = "weapon";
          // iTempl.title = tmpItem.title;
          // iTempl.name = tmpItem.name;
          // iTempl.materialType = tmpItem.materialType;
          // iTempl.itemType = tmpItem.weaponType;
          // iTempl.value = tmpItem.damage;
          // itemTemplatesArr.push(iTempl);

          tmpItem.itemType = getItemTypeTitle(tmpItem.type);
          tmpItem.materialType = getMaterialTypeTitle(tmpItem.materialType);
        });

        this.items = itemTemplates;

        // console.log(JSON.stringify(itemTemplatesArr));

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

  _handleItemDeleteClick(item): void {
    this.loader = this.loadingCtrl.create({
      content: `Deleting item ${item.name}`
    });
    this.loader.present();

    this._provider.delete(item.id)
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
