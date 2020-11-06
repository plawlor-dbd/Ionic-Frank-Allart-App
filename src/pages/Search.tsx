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
  IonSearchbar,
  IonItem,
  IonLabel
} from '@ionic/react';
import '../styles/Search.css';
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
          <IonButton routerLink="..">
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
             <IonItem mode='md' detail={false}  className="popOverItem" routerLink="/Notifications"><IonIcon slot="start" src="assets/icon/notifications-outline.svg"/><IonLabel>Notifications</IonLabel></IonItem>
            <hr id="solid"></hr>
            <IonItem  mode='md' detail={false} className="popOverItem" routerLink="/Search"><IonIcon slot="start" src="assets/icon/search-outline.svg"/><IonLabel>Search</IonLabel></IonItem>
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
