export interface Menu {
  name: string;
  urlName: string;
  src: string;
  id: number;
}

const menuItems: Menu[] = [
  {
    name: 'Allart Select',
    urlName:'AllartSelect',
    src: 'assets/menu-images/ST.png',
    id: 0
  },
  {
    name: 'Door Furniture',
    urlName:'DoorFurniture',
    src: 'assets/menu-images/DF.png',
    id: 1
  },
  {
    name: 'Cabinet Furniture',
    urlName:'CabinetFurniture',
    src: 'assets/menu-images/CF.png',
    id: 2
  },
  {
    name: 'Door Bolts and Cremone',
    urlName:'DoorBoltsandCremone',
    src: 'assets/menu-images/DB.png',
    id: 3
  },
  {
    name: 'Window Furniture',
    urlName:'WindowFurniture',
    src: 'assets/menu-images/WF.png',
    id: 4
  },
  {
    name: 'Miscellaneous', 
    urlName:'Miscellaneous',
    src: 'assets/menu-images/MC.png',
    id: 5
  },
  {
    name: 'Finishes and Patinas',
    urlName:'FinishesandPatinas',
    src: 'assets/menu-images/finishes.png',
    id: 6
  },
  {
    name: 'Indexes',
    urlName:'Indexes',
    src: 'assets/menu-images/list-outline.svg',
    id: 7
  },
  {
    name: 'Contact',
    urlName:'Contact',
    src: 'assets/menu-images/call-outline.svg',
    id: 8
  },
];

export const getMenuItems = () => menuItems;

export const getMenuItem = (id: number) => menuItems.find(m => m.id === id);
