import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController, Nav } from 'ionic-angular';

import { ManageRecipesPage } from '../manage-recipes/manage-recipes';
import { ManageItemTemplatesPage } from '../manage-item-templates/manage-item-templates';
import { ManageInventoryPage } from '../manage-inventory/manage-inventory';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  // rootPage = ManageInventoryPage;
  rootPage = ManageRecipesPage;

  constructor(
    public navCtrl: NavController,
    private menu: MenuController) {
  }

  ionViewDidLoad(): void {
  }

  openPage(pageName): void {
    this.menu.close();

    switch (pageName) {
      case 'manageItemTemplates':
        this.nav.setRoot(ManageItemTemplatesPage);
        break;
      case 'manageRecipes':
        this.nav.setRoot(ManageRecipesPage);
        break;
      case 'manageInventory':
        this.nav.setRoot(ManageInventoryPage);
        break;
    }
  }

  closeMenu(): void {
    this.menu.close();
  }

}
