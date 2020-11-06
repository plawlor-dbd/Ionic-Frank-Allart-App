import React, { useState } from 'react';
import { Menu, getMenuItems } from '../data/menuItems';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonButtons,
  IonButton,
  IonIcon,
  IonPopover,
  IonItem,
  IonLabel
} from '@ionic/react';
import '../styles/Home.css';
import MenuListItem from '../components/MenuListItem';
import 'tippy.js/dist/tippy.css';
//import { SocialSharing } from '@ionic-native/social-sharing/';
//import { AppRate } from '@ionic-native/app-rate/';



const Home: React.FC = () => {

  const [menuItems, setMenuItems] = useState<Menu[]>([]);
  const [showPopover, setShowPopover] = useState(false);

  /*const [shareAppObj] = useState(SocialSharing);
  const shareApp = () => {
    console.log('Email!');
    shareAppObj.canShareViaEmail().then(() => {
      shareAppObj.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
        // Success!
       
      }).catch(() => {
        // Error!
      });
    }).catch(() => {
      
    });
  };
  const [rateAppObj] = useState(AppRate);
  const rateApp = () =>{
    console.log(rateAppObj);
    rateAppObj.navigateToAppStore();
  }*/

  useIonViewWillEnter(() => {
    const mnu = getMenuItems();
    setMenuItems(mnu);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };



  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Frank Allart Products</IonTitle>
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
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonList id="homeMenu">
         {menuItems.map(m => <MenuListItem key={m.id} menu={m} />)}
        </IonList>
      </IonContent>
    </IonPage>

    
  
  );
};

export default Home;
