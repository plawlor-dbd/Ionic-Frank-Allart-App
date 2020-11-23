import React, { useState } from 'react';
import { Menu, getMenuItems } from '../data/menuItems';
import {
  IonContent,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  useIonViewWillEnter,
} from '@ionic/react';
import '../styles/Home.css';
import MenuListItem from '../components/MenuListItem';
import 'tippy.js/dist/tippy.css';
import Header from '../components/Header';
//import { SocialSharing } from '@ionic-native/social-sharing/';
//import { AppRate } from '@ionic-native/app-rate/';



const Home: React.FC = () => {

  const [menuItems, setMenuItems] = useState<Menu[]>([]);

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
            <Header heading={"Frank Allart Products"}/>

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
