import React from 'react';
import {
  IonItem,
  IonLabel,
  IonNote,
  IonThumbnail
  } from '@ionic/react';
import { Menu } from '../data/menuItems';
import './MenuListItem.css';

interface MenuListItemProps {
  menu: Menu;
}

const MenuListItem: React.FC<MenuListItemProps> = ({ menu }) => {
  return (
    <IonItem routerLink={`/home/${menu.urlName}`}  detail={false}>
      <IonLabel className="ion-text-wrap">
        <h2>
          {menu.name}
        </h2>
      </IonLabel>
      <IonThumbnail slot="end">
        <img src ={menu.src}/>
      </IonThumbnail>
    </IonItem>
  );
};

export default MenuListItem;
