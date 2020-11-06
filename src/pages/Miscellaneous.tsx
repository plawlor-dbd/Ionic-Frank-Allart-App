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
import '../styles/Miscellaneous.css';

const Miscellaneous: React.FC = () => {

  const [showPopover, setShowPopover] = useState(false);

  return (
    <IonPage id="Miscellaneous">
      <IonHeader>
        <IonToolbar>
        <IonButtons  slot="start">
          <IonButton routerLink="..">
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
          <IonItem mode='md' className="catImages" detail={false} routerLink="/home/Miscellaneous/ProductGallery/MC1">
              <img alt="MC1" src="assets/miscellaneous/door holders and stops.png"/>
            </IonItem>
      <p>MC1</p>
      </IonCol>

      <IonCol>
      <IonItem mode='md' className="catImages" detail={false} routerLink="/home/Miscellaneous/ProductGallery/MC2">
              <img alt="MC2" src="assets/miscellaneous/hooks and brackets.png"/>
            </IonItem>
      <p>MC2</p>
      </IonCol>
      </IonRow>
      <IonRow>
          <IonCol>
          <IonItem mode='md' className="catImages" detail={false} routerLink="/home/Miscellaneous/ProductGallery/MC3">
              <img alt="MC3" src="assets/miscellaneous/locks latches and bolts.png"/>
            </IonItem>
      <p>MC3</p>
      </IonCol>

      <IonCol>
      <IonItem mode='md' className="catImages" detail={false} routerLink="/home/Miscellaneous/ProductGallery/MC4">
              <img alt="MC4" src="assets/miscellaneous/door hinges.png"/>
            </IonItem>
      <p>MC4</p>
      </IonCol>
      </IonRow>
      <IonRow>
          <IonCol>
          <IonItem mode='md' className="catImages" detail={false} routerLink="/home/Miscellaneous/ProductGallery/MC5">
              <img alt="MC5" src="assets/miscellaneous/fasterners screws and components.png"/>
            </IonItem>
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
