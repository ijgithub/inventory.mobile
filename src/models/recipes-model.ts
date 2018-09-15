export class CraftingInput {
  quantity: number;
  craftingIngredientId: number;
}

export class CraftingOutput {
  quantity: number;
  craftedItemId: number;
}

export class Recipe {
  id: number;

  name: string;
  title: string;

  craftingIngredients: CraftingInput[];
  craftedItems: CraftingOutput[];
}
