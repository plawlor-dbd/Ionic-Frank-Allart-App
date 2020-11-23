import React from 'react';
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
} from '@ionic/react';
import '../styles/DoorFurniture.css';
import Header from '../components/Header';

const DoorFurniture: React.FC = () => {


  return (
    <IonPage id="DoorFurniture">
      <Header heading={"Door Furniture"}/>
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
