export class ItemTemplate {
  id: number;
  templateType: string;
  itemType: number;
  materialType: number;
  name: string;
  title: string;
  value: number;
}

export enum TemplateType
{
  Unspecified = 0,
  Weapon = 1,
  Armor = 2,
  AlchemyIngredient = 3,
  CraftingIngredient = 4,
  Consumable = 5
}

export const templateTypes: any[] = [
  { title: "Weapon", value: TemplateType.Weapon },
  { title: "Armor", value: TemplateType.Armor },
  { title: "Crafting ingredient", value: TemplateType.CraftingIngredient },
  { title: "Alchemy ingredient", value: TemplateType.AlchemyIngredient },
  { title: "Consumable", value: TemplateType.Consumable },
];

export function getTemplateTypeTitle(value) {
  var result = "";

  for (let i = 0; i < templateTypes.length && !result.length; i++) {
    let type = templateTypes[i];
    result = type.value === value ? type.title : result;
  }

  return result;
}

export const itemTypes: any[] = [
  { title: "Short Sword", value: 1 },
  { title: "Long Sword", value: 2 },
  { title: "Two-handed Sword", value: 3 },
  { title: "Hatchet", value: 4 },
  { title: "Axe", value: 5 },
  { title: "Vest", value: 6 },
  { title: "Pants", value: 7 },
  { title: "Helmet", value: 8 },
  { title: "Curias", value: 9 },
  { title: "Gloves", value: 10 },
  { title: "Boots", value: 11 },
  { title: "Gauntlets", value: 12 },
  { title: "Greaves", value: 13 },
];

export function getItemTypeTitle(value) {
  var result = "";

  for (let i = 0; i < itemTypes.length && !result.length; i++) {
    let type = itemTypes[i];
    result = type.value === value ? type.title : result;
  }

  return result;
}

export const weaponTypes: any[] = [
  { title: "Short Sword", value: "1" },
  { title: "Long Sword", value: "2" },
  { title: "Two-handed Sword", value: "3" },
  { title: "Hatchet", value: "4" },
  { title: "Axe", value: "5" },
];

export const armorTypes: any[] = [
  { title: "Vest", value: "6" },
  { title: "Pants", value: "7" },
  { title: "Helmet", value: "8" },
  { title: "Curias", value: "9" },
  { title: "Gloves", value: "10" },
  { title: "Boots", value: "11" },
  { title: "Gauntlets", value: "12" },
  { title: "Greaves", value: "13" }
];

export const materialTypes: any[] = [
  { title: "Cloth", value: 1 },
  { title: "Leather", value: 2 },
  { title: "Iron", value: 3 },
  { title: "Steel", value: 4 }
];

export const weaponMaterialTypes: any[] = [
  { title: "Iron", value: 3 },
  { title: "Steel", value: 4 }
];

export function getMaterialTypeTitle(value) {
  var result = "";

  for (let i = 0; i < materialTypes.length && !result.length; i++) {
    let type = materialTypes[i];
    result = type.value === value ? type.title : result;
  }

  return result;
}

const exportedData = [{"id":1,"templateType":"weapon","title":"Iron Long Sword 1","name":"iron_long_sword1","materialType":3,"itemType":2,"value":20},{"id":2,"templateType":"weapon","title":"Iron Two-Handed Sword","name":"iron_twohanded_sword","materialType":3,"itemType":3,"value":30},{"id":1002,"templateType":"weapon","title":"Iron Hatchet 1","name":"iron_hatchet1","materialType":3,"itemType":4,"value":15},{"id":1003,"templateType":"weapon","title":"Iron Short Sword 2","name":"iron_short_sword_2","materialType":3,"itemType":1,"value":13},{"id":1004,"templateType":"weapon","title":"Iron Axe 1","name":"iron_axe1","materialType":3,"itemType":5,"value":20},{"id":1005,"templateType":"weapon","title":"Steel Short Sword","name":"steel_shortsword","materialType":4,"itemType":1,"value":20},{"id":1006,"templateType":"weapon","title":"Steel Longsword","name":"steel_longsword","materialType":4,"itemType":2,"value":30},{"id":1007,"templateType":"weapon","title":"Steel Two-handed Sword","name":"steel_twohanded_sword","materialType":4,"itemType":3,"value":45},{"id":1008,"templateType":"weapon","title":"Steel Hatchet","name":"steel_hatchet","materialType":4,"itemType":4,"value":25},{"id":1009,"templateType":"weapon","title":"Steel Axe","name":"steel_axe","materialType":4,"itemType":5,"value":30},{"id":1,"templateType":"armor","title":"Cloth Vest","name":"cloth_vest","materialType":1,"itemType":6,"value":10},{"id":2,"templateType":"armor","title":"Cloth Pants","name":"cloth_pants","materialType":1,"itemType":7,"value":5},{"id":3,"templateType":"armor","title":"Leather Helmet","name":"leather_helmet","materialType":2,"itemType":8,"value":5},{"id":4,"templateType":"armor","title":"Leather Curias","name":"leather_curias","materialType":2,"itemType":9,"value":15},{"id":5,"templateType":"armor","title":"Leather Gloves","name":"leather_gloves","materialType":2,"itemType":10,"value":3},{"id":6,"templateType":"armor","title":"Leather Pants","name":"leather_pants","materialType":2,"itemType":7,"value":10},{"id":7,"templateType":"armor","title":"Leather Boots","name":"leather_boots","materialType":2,"itemType":11,"value":5},{"id":8,"templateType":"armor","title":"Iron Helmet","name":"iron_helmet","materialType":3,"itemType":8,"value":8},{"id":9,"templateType":"armor","title":"Iron Curias","name":"iron_curias","materialType":3,"itemType":9,"value":20},{"id":10,"templateType":"armor","title":"Iron Gauntlets","name":"iron_gauntlets","materialType":3,"itemType":12,"value":6},{"id":11,"templateType":"armor","title":"Iron Greaves","name":"iron_greaves","materialType":3,"itemType":13,"value":15},{"id":12,"templateType":"armor","title":"Iron Boots","name":"iron_boots","materialType":3,"itemType":11,"value":8},{"id":13,"templateType":"armor","title":"Steel Helmet","name":"steel_helmet","materialType":4,"itemType":8,"value":11},{"id":14,"templateType":"armor","title":"Steel Curias","name":"steel_curias","materialType":4,"itemType":9,"value":25},{"id":15,"templateType":"armor","title":"Steel Gauntlets","name":"steel_gauntlets","materialType":4,"itemType":12,"value":9},{"id":16,"templateType":"armor","title":"Steel Greaves","name":"steel_greaves","materialType":4,"itemType":13,"value":20},{"id":17,"templateType":"armor","title":"Steel Boots","name":"steel_boots","materialType":4,"itemType":11,"value":11}];
