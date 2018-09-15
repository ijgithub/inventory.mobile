export class CraftingInput {
  id: number;
  quantity: number;
  craftingIngredientId: number;
}

export class CraftingOutput {
  id: number;
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
