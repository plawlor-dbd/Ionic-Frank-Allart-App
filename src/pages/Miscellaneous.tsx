import React from 'react';
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
} from '@ionic/react';
import '../styles/Miscellaneous.css';
import Header from '../components/Header';

const Miscellaneous: React.FC = () => {


  return (
    <IonPage id="Miscellaneous">
           <Header heading={"Miscellaneous"}/>

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
