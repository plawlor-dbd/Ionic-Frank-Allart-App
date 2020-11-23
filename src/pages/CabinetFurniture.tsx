import React from 'react';
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
} from '@ionic/react';
import '../styles/CabinetFurniture.css';
import Header from '../components/Header';

const CabinetFurniture: React.FC = () => {

  return (
    <IonPage id="CabinetFurniture">
      <Header heading={"Cabinet Furniture"}/>
      <IonContent fullscreen>
      <IonGrid>
        <IonRow>
          <IonCol>
          <IonItem mode='md' className="catImages" detail={false} routerLink="/home/CabinetFurniture/ProductGallery/CF1">
              <img alt="CF1" src="assets/cabinet-furniture/cabinet knobs.png"/>
            </IonItem>
            <p>CF1</p>
          </IonCol>

      <IonCol>
      <IonItem mode='md' className="catImages" detail={false} routerLink="/home/CabinetFurniture/ProductGallery/CF2">
              <img alt="CF2" src="assets/cabinet-furniture/appliance pulls.png"/>
            </IonItem>
      <p>CF2</p>
      </IonCol>
      </IonRow>
      <IonRow>
          <IonCol>
          <IonItem mode='md' className="catImages" detail={false} routerLink="/home/CabinetFurniture/ProductGallery/CF3">
                <img alt="CF3" src="assets/cabinet-furniture/ring pulls catches flush rings.png"/>
            </IonItem>
      <p>CF3</p>
      </IonCol>

      <IonCol>
      </IonCol>
      </IonRow>
      </IonGrid>
    
      </IonContent>
    </IonPage>
  );
};

export default CabinetFurniture;
