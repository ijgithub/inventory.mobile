import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { InventoryProvider } from '../../providers/inventory/inventory';
import { ItemTemplatesProvider } from '../../providers/item-templates/item-templates';
import { TemplateType } from '../../models/item-template.model';

/**
 * Generated class for the SelectItemTemplatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-select-item-template',
  templateUrl: 'select-item-template.html',
})
export class SelectItemTemplatePage {

  itemTemplates: any[] = [];
  selectedItemIds: string[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public inventoryProvider: InventoryProvider,
    public templatesProvider: ItemTemplatesProvider,
    public loadingController: LoadingController,
    public viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectItemTemplatePage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter SelectItemTemplatePage');

    this.loadingController.create({
      content: "Loading items ..."
    });

    this.templatesProvider.list()
      .then(data => {
        this.itemTemplates = data;
      })
      .catch(error => {
        alert(error.messge || error);
      });
  }

  _handleItemClick($event) {
    const target = $event.currentTarget;
    const id = target.getAttribute("data-id");

    const itemIndex = this.selectedItemIds.indexOf(id);
    if (itemIndex > -1) {
      this.selectedItemIds.splice(itemIndex, 1);

    } else {
      this.selectedItemIds.push(id);
    }
  }

  _isSelected(item) {
    var idStr = item.id.toString();
    return this.selectedItemIds.indexOf(idStr) > -1;
  }

  _handleDismissClick() {
    this.viewCtrl.dismiss();
  }

  _handleSelectClick() {
    if (this.selectedItemIds.length === 0) {
      this.viewCtrl.dismiss([], 'dismissed');
      return;
    }

    const selectedItems = [];
    this.selectedItemIds.forEach(id => {
      const found = this.itemTemplates.find(it => it.id == +id);
      if (!found) return;

      selectedItems.push(found);
    });

    this.viewCtrl.dismiss(selectedItems, 'item-selected');
  }

  _computeItemTypeLabel(item) {
    if (item.templateType === TemplateType.Weapon) {
      return "Weapon Type";

    } else if (item.templateType === TemplateType.Armor) {
      return "Armor Type";
    }
  }

}
