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
import './WindowFurniture.css';

const WindowFurniture: React.FC = () => {

  const [showPopover, setShowPopover] = useState(false);

  return (
    <IonPage id="WindowFurniture">
      <IonHeader>
        <IonToolbar>
        <IonButtons  slot="start">
          <IonButton href="..">
            <IonIcon slot="icon-only" src="assets/icon/chevron-back-outline.svg"/>
            </IonButton>
        </IonButtons>
          <IonTitle>Window Furniture</IonTitle>
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
        <a href="/home/WindowFurniture/ProductGalleryWF1">
              <img  alt="WF1" src="assets/window-furniture/espagnolette handles.png"/>
            </a>
          <p>WF1</p>
        </IonCol>
        <IonCol>
        <a href="/home/WindowFurniture/ProductGalleryWF2">
              <img  alt="WF2" src="assets/window-furniture/fasteners stays and accessories.png"/>
            </a>
          <p>WF2</p>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
        <a href="/home/WindowFurniture/ProductGalleryWF3">
                <img alt="WF3"  src="assets/window-furniture/fasteners lifts and accessories.png"/>
            </a>
      <p>WF3</p>
      </IonCol>

      <IonCol>
      <a href="/home/WindowFurniture/ProductGalleryWF4">
              <img alt="WF4" src="assets/window-furniture/fanlight catches and stays.png"/>
            </a>
      <p>WF4</p>
      </IonCol>
      </IonRow>
      </IonGrid>
    
      </IonContent>
    </IonPage>
  );
};

export default WindowFurniture;
