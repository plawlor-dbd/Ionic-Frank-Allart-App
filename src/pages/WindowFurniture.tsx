import React from 'react';
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
} from '@ionic/react';
import '../styles/WindowFurniture.css';
import Header from '../components/Header';

const WindowFurniture: React.FC = () => {

  return (
    <IonPage id="WindowFurniture">
            <Header heading={"Window Furniture"}/>

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
