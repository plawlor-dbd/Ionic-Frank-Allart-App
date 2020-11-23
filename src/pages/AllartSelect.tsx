import React from 'react';
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
} from '@ionic/react';
import '../styles/AllartSelect.css';
import Header from '../components/Header';

const AllartSelect: React.FC = () => {



  return (
    <IonPage id="AllartSelect">
      <Header heading={"Allart Select"}/>
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
