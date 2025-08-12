export type ModuleItem = {
  id: string;
  title: string;
  icon: string;
  type: 'module';
};

export type AddItem = { id: 'add'; type: 'add' };
export type HomeItem = ModuleItem | AddItem;

// On met directement type: 'module' dans chaque objet
export const modules: ModuleItem[] = [
  { id: '1', title: 'Injection', icon: '💉', type: 'module' },
  { id: '2', title: 'Température', icon: '🌡️', type: 'module' },
  { id: '3', title: 'Tension', icon: '🩺', type: 'module' },
];


// Fonction qui retourne la liste complète :
// - tous les modules
// - + un élément spécial "Ajouter un module"
export function getHomeItems(): HomeItem[] {
  return [...modules, { id: 'add', type: 'add' }];
}
