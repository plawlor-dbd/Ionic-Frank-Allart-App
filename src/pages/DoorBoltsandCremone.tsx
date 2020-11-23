import React from 'react';
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
} from '@ionic/react';
import '../styles/DoorBoltsandCremone.css';
import Header from '../components/Header';

const DoorBoltsandCremone: React.FC = () => {

  

  return (
    <IonPage id="DoorBoltsandCremone">
      <Header heading={"Door Bolts and Cremone Bolts"}/>
      <IonContent fullscreen>
      <IonGrid>
        <IonRow>
          <IonCol>
          <IonItem mode='md' className="catImages" detail={false} routerLink="/home/DoorBoltsandCremone/ProductGallery/DB1">
              <img alt="DB1" src="assets/door-bolts-and-cremone/surface bolts.png"/>
            </IonItem>
      <p>DB1</p>
      </IonCol>

      <IonCol>
      <IonItem mode='md' className="catImages" detail={false} routerLink="/home/DoorBoltsandCremone/ProductGallery/DB2">
              <img alt="DB2" src="assets/door-bolts-and-cremone/flush and transom bolts.png"/>
            </IonItem>
      <p>DB2</p>
      </IonCol>
      </IonRow>
      <IonRow>
          <IonCol>
          <IonItem mode='md' className="catImages" detail={false} routerLink="/home/DoorBoltsandCremone/ProductGallery/DB3">
              <img alt="DB3" src="assets/door-bolts-and-cremone/cremone bolt.png"/>
            </IonItem>
      <p>DB3</p>
      </IonCol>

      <IonCol>
      <IonItem mode='md' className="catImages" detail={false} routerLink="/home/DoorBoltsandCremone/ProductGallery/DB4">
              <img alt="DB4" src="assets/door-bolts-and-cremone/straps strikes sockets and staples.png"/>
            </IonItem>
      <p>DB4</p>
      </IonCol>
      </IonRow>
      </IonGrid>
    
      </IonContent>
    </IonPage>
  );
};

export default DoorBoltsandCremone;
