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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ManageInventoryPage,
    ManageItemTemplatesPage,
    ManageRecipesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ManageInventoryPage,
    ManageItemTemplatesPage,
    ManageRecipesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
