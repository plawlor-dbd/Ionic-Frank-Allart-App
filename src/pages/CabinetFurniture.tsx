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
import './CabinetFurniture.css';

const CabinetFurniture: React.FC = () => {

  const [showPopover, setShowPopover] = useState(false);

  return (
    <IonPage id="CabinetFurniture">
      <IonHeader>
        <IonToolbar>
        <IonButtons  slot="start">
          <IonButton href="..">
            <IonIcon slot="icon-only" src="assets/icon/chevron-back-outline.svg"/>
            </IonButton>
        </IonButtons>
          <IonTitle>Cabinet Furniture</IonTitle>
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
          <a href="/home/CabinetFurniture/ProductGalleryCF1">
              <img  src="assets/cabinet-furniture/cabinet knobs.png"/>
            </a>
      <p>CF1</p>
      </IonCol>

      <IonCol>
      <a href="/home/CabinetFurniture/ProductGalleryCF2">
              <img  src="assets/cabinet-furniture/appliance pulls.png"/>
            </a>
      <p>CF2</p>
      </IonCol>
      </IonRow>
      <IonRow>
          <IonCol>
          <a href="/home/CabinetFurniture/ProductGalleryCF3">
                <img  src="assets/cabinet-furniture/ring pulls catches flush rings.png"/>
            </a>
      <p>CF3</p>
      </IonCol>

      <IonCol>
      </IonCol>
      </IonRow>
      </IonGrid>
    
      </IonContent>
    </IonPage>
  );
};

export default CabinetFurniture;
