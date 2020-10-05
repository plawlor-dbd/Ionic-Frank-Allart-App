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
  IonPopover
} from '@ionic/react';
import './DoorBoltsandCremone.css';

const DoorBoltsandCremone: React.FC = () => {

  const [showPopover, setShowPopover] = useState(false);
  

  return (
    <IonPage id="DoorBoltsandCremone">
      <IonHeader>
        <IonToolbar>
        <IonButtons  slot="start">
          <IonButton href="..">
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
      <IonGrid>
        <IonRow>
          <IonCol>
          <a href="/home/DoorBoltsandCremone/ProductGalleryDB1">
              <img  src="assets/door-bolts-and-cremone/surface bolts.png"/>
            </a>
      <p>DB1</p>
      </IonCol>

      <IonCol>
      <a href="/home/DoorBoltsandCremone/ProductGalleryDB2">
              <img  src="assets/door-bolts-and-cremone/flush and transom bolts.png"/>
            </a>
      <p>DB2</p>
      </IonCol>
      </IonRow>
      <IonRow>
          <IonCol>
          <a href="/home/DoorBoltsandCremone/ProductGalleryDB3">
              <img  src="assets/door-bolts-and-cremone/cremone bolt.png"/>
            </a>
      <p>DB3</p>
      </IonCol>

      <IonCol>
      <a href="/home/DoorBoltsandCremone/ProductGalleryDB4">
              <img  src="assets/door-bolts-and-cremone/straps strikes sockets and staples.png"/>
            </a>
      <p>DB4</p>
      </IonCol>
      </IonRow>
      </IonGrid>
    
      </IonContent>
    </IonPage>
  );
};

export default DoorBoltsandCremone;
