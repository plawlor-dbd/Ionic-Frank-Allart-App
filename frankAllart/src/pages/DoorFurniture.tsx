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
import './DoorFurniture.css';

const DoorFurniture: React.FC = () => {

  const [showPopover, setShowPopover] = useState(false);

  return (
    <IonPage id="DoorFurniture">
      <IonHeader>
        <IonToolbar>
        <IonButtons  slot="start">
          <IonButton href="..">
            <IonIcon slot="icon-only" src="assets/icon/chevron-back-outline.svg"/>
            </IonButton>
        </IonButtons>
          <IonTitle>Door Furniture</IonTitle>
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
          <a href="/home/DoorFurniture/ProductGalleryDF1">
              <img  src="assets/door-furniture/door lever sets.png"/>
            </a>
      <p>DF1</p>
      </IonCol>

      <IonCol>
      <a href="/home/DoorFurniture/ProductGalleryDF2">
            <img  src="assets/door-furniture/door knob sets.png"/>
            </a>
      <p>DF2</p>
      </IonCol>
      </IonRow>
      <IonRow>
          <IonCol>
          <a href="/home/DoorFurniture/ProductGalleryDF3">
              <img  src="assets/door-furniture/pull handles and plates.png"/>
            </a>
      <p> DF3</p>
      </IonCol>

      <IonCol>
      <a href="/home/DoorFurniture/ProductGalleryDF4">
              <img  src="assets/door-furniture/sliding door furniture.png"/>
            </a>
      <p>DF4</p>
      </IonCol>
      </IonRow>
      <IonRow>
          <IonCol>
          <a href="/home/DoorFurniture/ProductGalleryDF5">
                <img  src="assets/door-furniture/entrance and exterior door furniture.png"/>
            </a>
      <p>DF5 </p>
      </IonCol>

      <IonCol>
      <a href="/home/DoorFurniture/ProductGalleryDF6">
                <img  src="assets/door-furniture/turns releases and escutcheons.png"/>
            </a>
      <p>DF6</p>
      </IonCol>
      </IonRow>
      </IonGrid>
    
      </IonContent>
    </IonPage>
  );
};

export default DoorFurniture;
