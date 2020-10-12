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
import './Miscellaneous.css';

const Miscellaneous: React.FC = () => {

  const [showPopover, setShowPopover] = useState(false);

  return (
    <IonPage id="Miscellaneous">
      <IonHeader>
        <IonToolbar>
        <IonButtons  slot="start">
          <IonButton href="..">
            <IonIcon slot="icon-only" src="assets/icon/chevron-back-outline.svg"/>
            </IonButton>
        </IonButtons>
          <IonTitle>Miscellaneous</IonTitle>
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
          <a href="/home/Miscellaneous/ProductGalleryMC1">
              <img alt="MC1" src="assets/miscellaneous/door holders and stops.png"/>
            </a>
      <p>MC1</p>
      </IonCol>

      <IonCol>
      <a href="/home/Miscellaneous/ProductGalleryMC2">
              <img alt="MC2" src="assets/miscellaneous/hooks and brackets.png"/>
            </a>
      <p>MC2</p>
      </IonCol>
      </IonRow>
      <IonRow>
          <IonCol>
          <a href="/home/Miscellaneous/ProductGalleryMC3">
              <img alt="MC3" src="assets/miscellaneous/locks latches and bolts.png"/>
            </a>
      <p>MC3</p>
      </IonCol>

      <IonCol>
      <a href="/home/Miscellaneous/ProductGalleryMC4">
              <img alt="MC4" src="assets/miscellaneous/door hinges.png"/>
            </a>
      <p>MC4</p>
      </IonCol>
      </IonRow>
      <IonRow>
          <IonCol>
          <a href="/home/Miscellaneous/ProductGalleryMC5">
              <img alt="MC5" src="assets/miscellaneous/fasterners screws and components.png"/>
            </a>
      <p>MC5</p>
      </IonCol>

      <IonCol>
      </IonCol>
      </IonRow>
      </IonGrid>
    
      </IonContent>
    </IonPage>
  );
};

export default Miscellaneous;
