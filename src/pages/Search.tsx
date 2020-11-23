import React, { useState } from 'react';
import { Menu, getMenuItems } from '../data/menuItems';
import {
  IonContent,
  IonList,
  IonPage,
  useIonViewWillEnter,
  IonSearchbar,
} from '@ionic/react';
import '../styles/Search.css';
import MenuListItem from '../components/MenuListItem';
import Header from '../components/Header';

const Search: React.FC = () => {
  const [menuItems, setMenuItems] = useState<Menu[]>([]);
  const [searchText, setSearchText] = useState('');

  useIonViewWillEnter(() => {
    const mnu = getMenuItems();
    setMenuItems(mnu);
  });


  return (
    <IonPage id="Search">
            <Header heading={"Search"}/>

      <IonContent fullscreen>
      <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="never"></IonSearchbar>
      <IonList>
          {menuItems.filter((m) => m.name === searchText ?? '(none)').map( pi => <MenuListItem key={pi.id} menu={pi} />)}

      </IonList>
      </IonContent>
    </IonPage>

    
  );
};



export default Search;
