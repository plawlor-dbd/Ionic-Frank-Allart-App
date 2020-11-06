import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonPopover,
  IonItem,
  IonLabel
} from '@ionic/react';
import '../styles/DoorBoltsandCremone.css';

const DoorBoltsandCremone: React.FC = () => {

  const [showPopover, setShowPopover] = useState(false);
  

  return (
    <IonPage id="DoorBoltsandCremone">
      <IonHeader>
        <IonToolbar>
        <IonButtons  slot="start">
          <IonButton routerLink="..">
            <IonIcon slot="icon-only" src="assets/icon/chevron-back-outline.svg"/>
            </IonButton>
        </IonButtons>
          <IonTitle>Door Bolts and Cremone Bolts</IonTitle>
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
      <IonGrid>
        <IonRow>
          <IonCol>
          <IonItem mode='md' className="catImages" detail={false} routerLink="/home/DoorBoltsandCremone/ProductGallery/DB1">
              <img alt="DB1" src="assets/door-bolts-and-cremone/surface bolts.png"/>
            </IonItem>
      <p>DB1</p>
      </IonCol>

      <IonCol>
      <IonItem mode='md' className="catImages" detail={false} routerLink="/home/DoorBoltsandCremone/ProductGallery/DB2">
              <img alt="DB2" src="assets/door-bolts-and-cremone/flush and transom bolts.png"/>
            </IonItem>
      <p>DB2</p>
      </IonCol>
      </IonRow>
      <IonRow>
          <IonCol>
          <IonItem mode='md' className="catImages" detail={false} routerLink="/home/DoorBoltsandCremone/ProductGallery/DB3">
              <img alt="DB3" src="assets/door-bolts-and-cremone/cremone bolt.png"/>
            </IonItem>
      <p>DB3</p>
      </IonCol>

      <IonCol>
      <IonItem mode='md' className="catImages" detail={false} routerLink="/home/DoorBoltsandCremone/ProductGallery/DB4">
              <img alt="DB4" src="assets/door-bolts-and-cremone/straps strikes sockets and staples.png"/>
            </IonItem>
      <p>DB4</p>
      </IonCol>
      </IonRow>
      </IonGrid>
    
      </IonContent>
    </IonPage>
  );
};

export default DoorBoltsandCremone;
