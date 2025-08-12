//Données de test
export type ModuleItem = {
  id: string;
  title: string;
  icon: string;
  type: 'module';
};

export type AddItem = {
  id: 'add';
  type: 'add';
};

export type HomeItem = ModuleItem | AddItem;

export const modules = [
  { id: '1', title: 'Injection', icon: '💉' },
  { id: '2', title: 'Température', icon: '🌡️' },
  { id: '3', title: 'Tension', icon: '🩺' },
];

export default modules;

export function getHomeItems(): HomeItem[] {
  return [...modules, { id: 'add', type: 'add' }];
}