import React from 'react';
import {
  IonContent,
  IonPage,

} from '@ionic/react';
import '../styles/Notifications.css';
import Header from '../components/Header';

const Notifications: React.FC = () => {

  return (
    <IonPage id="Notifications">
            <Header heading={"Notifications"}/>

      <IonContent fullscreen>
    
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
