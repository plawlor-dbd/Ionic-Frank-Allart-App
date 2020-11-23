import React from 'react';
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
} from '@ionic/react';
import '../styles/Indexes.css';
import Header from '../components/Header';

const Indexes: React.FC = () => {



  return (
    <IonPage id="Indexes">
      
      <Header heading={"Indexes"}/>
      <IonContent fullscreen>
      <IonGrid>
        <IonRow>
          <IonCol>
          <IonItem mode='md' className="catImages" detail={false} routerLink="/home/Indexes/ProductGallery/AI">
              <img alt="Alpha Index" src="assets/indexes/alphabetical index.png"/>
            </IonItem>
      <p>Alphabetic Index</p>
      </IonCol>

      <IonCol>
      <IonItem mode='md' className="catImages" detail={false} routerLink="/home/Indexes/ProductGallery/NI">
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
