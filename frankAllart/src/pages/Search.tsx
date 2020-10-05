import React, { useState } from 'react';
import { Menu, getMenuItems } from '../data/menuItems';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonButtons,
  IonButton,
  IonIcon,
  IonPopover,
  IonSearchbar
} from '@ionic/react';
import './Search.css';
import MenuListItem from '../components/MenuListItem';

const Search: React.FC = () => {
  const [menuItems, setMenuItems] = useState<Menu[]>([]);
  const [showPopover, setShowPopover] = useState(false);
  const [searchText, setSearchText] = useState('');

  useIonViewWillEnter(() => {
    const mnu = getMenuItems();
    setMenuItems(mnu);
  });


  return (
    <IonPage id="Miscellaneous">
      <IonHeader>
        <IonToolbar>
        <IonButtons  slot="start">
          <IonButton href="..">
            <IonIcon slot="icon-only" src="assets/icon/chevron-back-outline.svg"/>
            </IonButton>
        </IonButtons>
          <IonTitle>Search</IonTitle>
          <IonButtons slot="end">
          <IonButton class="actionButton" onClick={() => setShowPopover(true)}>
            <IonIcon slot="icon-only" src="assets/icon/ellipsis-vertical-outline.svg"/>
          </IonButton>
        </IonButtons>
        <IonPopover
            isOpen={showPopover}
            cssClass='my-custom-class'
            onDidDismiss={e => setShowPopover(false)}>
             <a href="/Notifications"><IonIcon slot="icon-only" src="assets/icon/notifications-outline.svg"/>Notifications</a>
            <hr id="solid"></hr>
            <a href="/Search"><IonIcon slot="icon-only" src="assets/icon/search-outline.svg"/>Search</a>
            {/*<hr id="solid"></hr>
            <a><IonIcon slot="icon-only" src="assets/icon/thumbs-up-outline.svg"/>Rate Now</a>
            <hr id="solid"></hr>
  <a><IonIcon slot="icon-only" src="assets/icon/share-social-outline.svg"/>Share Now</a>*/}
          </IonPopover>
        </IonToolbar>
      </IonHeader>
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
