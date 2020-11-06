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
import '../styles/DoorFurniture.css';

const DoorFurniture: React.FC = () => {

  const [showPopover, setShowPopover] = useState(false);

  return (
    <IonPage id="DoorFurniture">
      <IonHeader>
        <IonToolbar>
        <IonButtons  slot="start">
          <IonButton routerLink="..">
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
          <IonItem mode='md' className="catImages" detail={false} routerLink="/home/DoorFurniture/ProductGallery/DF1">
              <img alt="DF1" src="assets/door-furniture/door lever sets.png"/>
            </IonItem>
      <p>DF1</p>
      </IonCol>

      <IonCol>
      <IonItem mode='md' className="catImages" detail={false} routerLink="/home/DoorFurniture/ProductGallery/DF2">
            <img alt="DF2" src="assets/door-furniture/door knob sets.png"/>
            </IonItem>
      <p>DF2</p>
      </IonCol>
      </IonRow>
      <IonRow>
          <IonCol>
          <IonItem mode='md' className="catImages" detail={false} routerLink="/home/DoorFurniture/ProductGallery/DF3">
              <img alt="DF3" src="assets/door-furniture/pull handles and plates.png"/>
            </IonItem>
      <p> DF3</p>
      </IonCol>

      <IonCol>
      <IonItem mode='md' className="catImages" detail={false} routerLink="/home/DoorFurniture/ProductGallery/DF4">
              <img alt="DF4" src="assets/door-furniture/sliding door furniture.png"/>
            </IonItem>
      <p>DF4</p>
      </IonCol>
      </IonRow>
      <IonRow>
          <IonCol>
          <IonItem mode='md' className="catImages" detail={false} routerLink="/home/DoorFurniture/ProductGallery/DF5">
                <img alt="DF5" src="assets/door-furniture/entrance and exterior door furniture.png"/>
            </IonItem>
      <p>DF5 </p>
      </IonCol>

      <IonCol>
      <IonItem mode='md' className="catImages" detail={false} routerLink="/home/DoorFurniture/ProductGallery/DF6">
                <img alt="DF6" src="assets/door-furniture/turns releases and escutcheons.png"/>
            </IonItem>
      <p>DF6</p>
      </IonCol>
      </IonRow>
      </IonGrid>
    
      </IonContent>
    </IonPage>
  );
};

export default DoorFurniture;
