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
import '../styles/Indexes.css';

const Indexes: React.FC = () => {

  const [showPopover, setShowPopover] = useState(false);

  return (
    <IonPage id="Indexes">
      
      <IonHeader>
        <IonToolbar>
        <IonButtons  slot="start">
          <IonButton routerLink="..">
            <IonIcon slot="icon-only" src="assets/icon/chevron-back-outline.svg"/>
            </IonButton>
        </IonButtons>
          <IonTitle>Indexes</IonTitle>
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
          <IonItem mode='md' className="catImages" detail={false} routerLink="/home/Indexes/AlphabeticalIndex/">
              <img alt="Alpha Index" src="assets/indexes/alphabetical index.png"/>
            </IonItem>
      <p>Alphabetic Index</p>
      </IonCol>

      <IonCol>
      <IonItem mode='md' className="catImages" detail={false} routerLink="/home/Indexes/NumericalIndex/">
              <img alt="Num Index" src="assets/indexes/numeric index.png"/>
            </IonItem>
      <p>Numeric Index</p>
      </IonCol>
      </IonRow>
      </IonGrid>
    
      </IonContent>
      
    </IonPage>
  );
};

export default Indexes;
