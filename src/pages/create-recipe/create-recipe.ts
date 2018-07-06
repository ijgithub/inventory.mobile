import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { SelectItemTemplatePage } from '../select-item-template/select-item-template';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalController: ModalController,
    private fb: FormBuilder) {

    this.recipeModel = this.fb.group({
      name: '',
      title: '',
      addAnother: false,
      inputs: this.fb.array([]),
      outputs: this.fb.array([]),
    });
  }

  get inputs(): FormArray {
    return this.recipeModel.get('inputs') as FormArray;
  }

  get outputs(): FormArray {
    return this.recipeModel.get('outputs') as FormArray;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateRecipePage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter CreateRecipePage');
  }

  _addInput($event) {
    const modal = this.modalController.create(SelectItemTemplatePage, null, { showBackdrop: true });
    modal.present();

    modal.onDidDismiss((data, role) => {
      if (role !== "item-selected") return;

      data.forEach(item => {
        const inputs: FormArray = this.recipeModel.controls['inputs'] as FormArray;
        // inputs.push(this.fb.group({ inputName: item.name, inputTitle: item.title }));
        inputs.push(this.fb.group(item));
      })
    });
  }

  _addOutput($event) {
    const outputs: FormArray = this.recipeModel.controls['outputs'] as FormArray;
    outputs.push(this.fb.group({ outputName: 'new name', outputTitle: 'new title' }));
  }

}
