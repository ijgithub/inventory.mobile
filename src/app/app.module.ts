import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ManageRecipesPage } from '../pages/manage-recipes/manage-recipes';
import { ManageItemTemplatesPage } from '../pages/manage-item-templates/manage-item-templates';
import { ManageInventoryPage } from '../pages/manage-inventory/manage-inventory';
import { InventoryProvider } from '../providers/inventory/inventory';
import { HttpClientModule } from '@angular/common/http';
import { ItemTemplatesProvider } from '../providers/item-templates/item-templates';
import { CreateItemTemplatePage } from '../pages/create-item-template/create-item-template';
import { RecipesProvider } from '../providers/recipes-provider';
import { CreateRecipePage } from '../pages/create-recipe/create-recipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ManageInventoryPage,
    ManageItemTemplatesPage,
    ManageRecipesPage,
    CreateItemTemplatePage,
    CreateRecipePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ManageInventoryPage,
    ManageItemTemplatesPage,
    ManageRecipesPage,
    CreateItemTemplatePage,
    CreateRecipePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InventoryProvider,
    ItemTemplatesProvider,
    RecipesProvider
  ]
})
export class AppModule {}
