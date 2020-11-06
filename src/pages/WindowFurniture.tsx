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
import '../styles/WindowFurniture.css';

const WindowFurniture: React.FC = () => {

  const [showPopover, setShowPopover] = useState(false);

  return (
    <IonPage id="WindowFurniture">
      <IonHeader>
        <IonToolbar>
        <IonButtons  slot="start">
          <IonButton routerLink="..">
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
        <IonItem mode='md' className="catImages" detail={false} routerLink="/home/WindowFurniture/ProductGallery/WF1">
              <img alt="WF1" src="assets/window-furniture/espagnolette handles.png"/>
            </IonItem>
          <p>WF1</p>
        </IonCol>
        <IonCol>
        <IonItem mode='md' className="catImages" detail={false} routerLink="/home/WindowFurniture/ProductGallery/WF2">
              <img alt="WF2" src="assets/window-furniture/fasteners stays and accessories.png"/>
            </IonItem>
          <p>WF2</p>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
        <IonItem mode='md' className="catImages" detail={false} routerLink="/home/WindowFurniture/ProductGallery/WF3">
                <img alt="WF3" src="assets/window-furniture/fasteners lifts and accessories.png"/>
            </IonItem>
      <p>WF3</p>
      </IonCol>

      <IonCol>
      <IonItem mode='md' className="catImages" detail={false} routerLink="/home/WindowFurniture/ProductGallery/WF4">
              <img alt="WF4" src="assets/window-furniture/fanlight catches and stays.png"/>
            </IonItem>
      <p>WF4</p>
      </IonCol>
      </IonRow>
      </IonGrid>
    
      </IonContent>
    </IonPage>
  );
};

export default WindowFurniture;
