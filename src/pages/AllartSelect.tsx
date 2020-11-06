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
import '../styles/AllartSelect.css';

const AllartSelect: React.FC = () => {

  const [showPopover, setShowPopover] = useState(false);


  return (
    <IonPage id="AllartSelect">
      <IonHeader>
        <IonToolbar>
          <IonButtons  slot="start">
          <IonButton routerLink="..">
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
          <IonCol >
            <IonItem className="catImages" mode='md' detail={false} routerLink="/home/AllartSelect/ProductGallery/ST1">
              <img alt="ST1" src="assets/allart-select/door levers.png"/>
            </IonItem>
            <p>ST1</p>
          </IonCol>

      <IonCol>
      <IonItem mode='md' className="catImages" detail={false} routerLink="/home/AllartSelect/ProductGallery/ST2">
              <img alt="ST2" src="assets/allart-select/door knobs.png"/>
            </IonItem>
      <p>ST2</p>
      </IonCol>
      </IonRow>

      <IonRow>
          <IonCol>
          <IonItem mode='md' className="catImages" detail={false} routerLink="/home/AllartSelect/ProductGallery/ST3">
              <img alt="ST3" src="assets/allart-select/rosettes.png"/>
            </IonItem>
      <p>ST3</p>
      </IonCol>

      <IonCol>
      <IonItem mode='md' className="catImages" detail={false} routerLink="/home/AllartSelect/ProductGallery/ST4">
              <img alt="ST4" src="assets/allart-select/backplates.png"/>
            </IonItem>
      <p>ST4</p>
      </IonCol>
      </IonRow>

      <IonRow>
          <IonCol>
          <IonItem mode='md' className="catImages" detail={false} routerLink="/home/AllartSelect/ProductGallery/ST5">
              <img alt="ST5" src="assets/allart-select/backplates functions.png"/>
            </IonItem>
      <p>ST5</p>
      </IonCol>

      <IonCol>
      <IonItem mode='md' className="catImages" detail={false} routerLink="/home/AllartSelect/ProductGallery/ST6">
              <img alt="ST6" src="assets/allart-select/options and accessories.png"/>
            </IonItem>
      <p>ST6</p>
      </IonCol>
      </IonRow>

      <IonRow>
          <IonCol>
          <IonItem mode='md' className="catImages" detail={false} routerLink="/home/AllartSelect/ProductGallery/ST7">
              <img alt="ST7" src="assets/allart-select/turns and releases.png"/>
            </IonItem>
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
