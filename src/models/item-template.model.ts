export const templateTypes: any[] = [
  { title: "Weapon", value: "weapon" },
  { title: "Armor", value: "armor" },
  { title: "Crafting ingredient", value: "craftingIngredient" },
  { title: "Alchemy ingredient", value: "alchemyIngredient" },
  { title: "Consumable", value: "consumable" },
];

export const weaponTypes: any[] = [
  { title: "Short Sword", value: 1 },
  { title: "Long Sword", value: 2 },
  { title: "Two-handed Sword", value: 3 },
  { title: "Hatchet", value: 4 },
  { title: "Axe", value: 5 }
];

export const materialTypes: any[] = [
  { title: "Cloth", value: 1 },
  { title: "Leather", value: 2 },
  { title: "Iron", value: 3 },
  { title: "Steel", value: 4 }
];


export function getTemplateTypeTitle(value) {
  var result = "";

  for (let i = 0; i < templateTypes.length && !result.length; i++) {
    let type = templateTypes[i];
    result = type.value === value ? type.title : result;
  }

  return result;
}

export function getWeaponTypeTitle(value) {
  var result = "";

  for (let i = 0; i < weaponTypes.length && !result.length; i++) {
    let type = weaponTypes[i];
    result = type.value === value ? type.title : result;
  }

  return result;
}

export function getMaterialTypeTitle(value) {
  var result = "";

  for (let i = 0; i < materialTypes.length && !result.length; i++) {
    let type = materialTypes[i];
    result = type.value === value ? type.title : result;
  }

  return result;
}
