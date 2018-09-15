import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { SelectItemTemplatePage } from '../select-item-template/select-item-template';
import { RecipesProvider } from '../../providers/recipes-provider';
import { Recipe, CraftingInput, CraftingOutput } from '../../models/recipes-model';

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
  isAddAnotherHidden: boolean = false;
  isUpdateMode: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalController: ModalController,
    public loadingController: LoadingController,
    private fb: FormBuilder,
    private provider: RecipesProvider
  ) {

    this.recipeModel = this.fb.group({
      name: '',
      title: '',
      addAnother: false,
      inputs: this.fb.array([]),
      outputs: this.fb.array([]),
    });

    this.isAddAnotherHidden = !!this.navParams.data.item;
    this.isUpdateMode = !!this.navParams.data.item;
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

    if (!this.navParams.data.item) return;

    const item = this.navParams.data.item;
    const existingValue = {
      name: item.name,
      title: item.title,
      addAnother: false
    };

    this.recipeModel.patchValue(existingValue);

    if (item.craftingIngredients && item.craftingIngredients.length) {
      const inputs: FormArray = this.recipeModel.controls['inputs'] as FormArray;

      item.craftingIngredients.forEach(tmpIng => {
        const input = this.fb.group({
          item: tmpIng.craftingIngredient,
          quantity: tmpIng.quantity
        });
        inputs.push(input);
      });
    }

    if (item.craftedItems && item.craftedItems.length) {
      const outputs: FormArray = this.recipeModel.controls['outputs'] as FormArray;

      item.craftedItems.forEach(tmpCi => {
        const output = this.fb.group({
          item: tmpCi.craftedItem,
          quantity: tmpCi.quantity
        });
        outputs.push(output);
      });
    }
  }

  _addInput($event) {
    const modal = this.modalController.create(SelectItemTemplatePage, null, { showBackdrop: true });
    modal.present();

    modal.onDidDismiss((data, role) => {
      if (role !== "item-selected") return;

      const inputs: FormArray = this.recipeModel.controls['inputs'] as FormArray;
      data.forEach(item => {
        inputs.push(this.fb.group({
          "item": item,
          "quantity": 1
          })
        );
      })
    });
  }

  _addOutput($event) {
    const modal = this.modalController.create(SelectItemTemplatePage, null, { showBackdrop: true });
    modal.present();

    modal.onDidDismiss((data, role) => {
      if (role !== "item-selected") return;

      const outputs: FormArray = this.recipeModel.controls['outputs'] as FormArray;
      data.forEach(item => {
        outputs.push(this.fb.group({
          "item": item,
          "quantity": 1
          })
        );
      })
    });
  }

  _handleSave($event) {
    const loadingInst = this.loadingController.create({
      content: "Saving ..."
    });
    loadingInst.present();

    const rModel: Recipe = {
      id: 0,
      name: this.recipeModel.get('name').value,
      title: this.recipeModel.get('title').value,
      craftingIngredients: [],
      craftedItems: []
    };

    if (this.isUpdateMode) {
      rModel.id = this.navParams.data.item.id;
    }

    this.inputs.value.forEach(input => {
      const craftingInput: CraftingInput = {
        craftingIngredientId: input.item.id,
        quantity: input.quantity
      }
      rModel.craftingIngredients.push(craftingInput);
    });

    this.outputs.value.forEach(input => {
      const craftingOutput: CraftingOutput = {
        craftedItemId: input.item.id,
        quantity: input.quantity
      }
      rModel.craftedItems.push(craftingOutput);
    });

    this.provider.create(rModel)
    .then(value => {
      loadingInst.dismiss();

      if (this.recipeModel.get("addAnother").value) return;

      this.navCtrl.pop();
    })
    .catch(error => {
      loadingInst.dismiss();
      alert(error.message || error);
    });
  }

}
