import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

/**
 * Generated class for the CreateRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-recipe',
  templateUrl: 'create-recipe.html',
})
export class CreateRecipePage {

  recipeModel: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.recipeModel = new FormGroup({
      name: new FormControl(),
      title: new FormControl(),
      addAnother: new FormControl(),
      inputs: new FormArray([
        new FormControl("inputName"),
        new FormControl("inputTitle"),
      ]),
      outputs: new FormArray([
        new FormControl("outputName"),
        new FormControl("outputTitle"),
      ]),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateRecipePage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter CreateRecipePage');
  }

  _handleSave($event) {

  }

}
