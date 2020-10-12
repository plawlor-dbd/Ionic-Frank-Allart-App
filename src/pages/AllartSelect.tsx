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
import './AllartSelect.css';

const AllartSelect: React.FC = () => {

  const [showPopover, setShowPopover] = useState(false);


  return (
    <IonPage id="AllartSelect">
      <IonHeader>
        <IonToolbar>
          <IonButtons  slot="start">
          <IonButton href="..">
            <IonIcon slot="icon-only" src="assets/icon/chevron-back-outline.svg"/>
            </IonButton>
        </IonButtons>
          <IonTitle>Allart Select</IonTitle>
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
            <a href="/home/AllartSelect/ProductGalleryST1">
              <img alt="ST1" src="assets/allart-select/door levers.png"/>
            </a>
            <p>ST1</p>
          </IonCol>

      <IonCol>
      <a href="/home/AllartSelect/ProductGalleryST2">
              <img alt="ST2" src="assets/allart-select/door knobs.png"/>
            </a>
      <p>ST2</p>
      </IonCol>
      </IonRow>

      <IonRow>
          <IonCol>
          <a href="/home/AllartSelect/ProductGalleryST3">
              <img alt="ST3" src="assets/allart-select/rosettes.png"/>
            </a>
      <p>ST3</p>
      </IonCol>

      <IonCol>
      <a href="/home/AllartSelect/ProductGalleryST4">
              <img alt="ST4" src="assets/allart-select/backplates.png"/>
            </a>
      <p>ST4</p>
      </IonCol>
      </IonRow>

      <IonRow>
          <IonCol>
          <a href="/home/AllartSelect/ProductGalleryST5">
              <img alt="ST5"  src="assets/allart-select/backplates functions.png"/>
            </a>
      <p>ST5</p>
      </IonCol>

      <IonCol>
      <a href="/home/AllartSelect/ProductGalleryST6">
              <img alt="ST6" src="assets/allart-select/options and accessories.png"/>
            </a>
      <p>ST6</p>
      </IonCol>
      </IonRow>

      <IonRow>
          <IonCol>
          <a href="/home/AllartSelect/ProductGalleryST7">
              <img alt="ST7" src="assets/allart-select/turns and releases.png"/>
            </a>
      <p>ST7</p>
      </IonCol>

      <IonCol>
      </IonCol>
      </IonRow>
      </IonGrid>
    
      </IonContent>
    </IonPage>
  );
};

export default AllartSelect;
