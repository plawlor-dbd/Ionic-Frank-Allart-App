import React, { useState } from 'react';

import { call, location, mail, globe} from 'ionicons/icons'

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonItem,
  IonCardContent,
  IonIcon,
  IonButtons,
  IonButton,
  IonPopover,
  IonLabel
} from '@ionic/react';
//import {Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import '../styles/Contact.css';




const ContactPg: React.FC = () => {

  /*const [contact] = useState(Contact);
  const addContact = () =>{
    console.log('Add contact button clicked')

  };*/
  const [showPopover, setShowPopover] = useState(false);
  return (
    
    <IonPage id="Contact">
      <IonHeader>
        <IonToolbar>
        <IonButtons  slot="start">
          <IonButton routerLink="..">
            <IonIcon slot="icon-only" src="assets/icon/chevron-back-outline.svg"/>
            </IonButton>
        </IonButtons>
            <IonTitle>Contact</IonTitle>
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
        <a href="tel:+44 121 410 6000" > 
        <IonCard class="c">
          <IonItem>
          <IonIcon class="contact" icon={call} item-start></IonIcon>
            <IonCardContent>
              <h3>UK Call</h3>
              <p>+44 121 410 6000</p>
              </IonCardContent>
            </IonItem>
        </IonCard>
        </a>
        <a href="tel:+1888 582 9110"> 
        <IonCard class="c">
          <IonItem>
          <IonIcon class="contact" icon={call} item-start></IonIcon>
            <IonCardContent>
              <h3>USA Call</h3>
              <p>+1888 582 9110</p>
              </IonCardContent>
            </IonItem>
        </IonCard>
        </a>
        <a href="mailto:sales@frankallart.co.uk"> 
        <IonCard class="c">
          <IonItem>
          <IonIcon class="contact" icon={mail} item-start></IonIcon>
            <IonCardContent>
              <h3>UK Email</h3>
              <p>sales@frankallart.co.uk</p>
              </IonCardContent>
            </IonItem>
        </IonCard>
        </a>

        <a href="mailto:sales@frankallart.com"> 
        <IonCard class="c">
          <IonItem>
          <IonIcon class="contact" icon={mail} item-start></IonIcon>
            <IonCardContent>
              <h3>USA Email</h3>
              <p>Sales@frankallart.com</p>
              </IonCardContent>
            </IonItem>
        </IonCard>
        </a>

         <IonCard class="c">
          <IonItem>
          <IonIcon class="contact" icon={location} item-start></IonIcon>
            <IonCardContent>
              <h3>UK Address</h3>
              <p>15/35 Great Tindal Street,Birmingham,B16 8DR UK</p>
              </IonCardContent>
            </IonItem>
        </IonCard>

        

        <IonCard class="c">
          <IonItem>
          <IonIcon class="contact" icon={location} item-start></IonIcon>
            <IonCardContent>
              <h3>USA Address</h3>
              <p>25 Sylvan Road South,Suite N,Westport,CT 06880 USA</p>
              </IonCardContent>
            </IonItem>
        </IonCard>

        <IonCard class="c">
          <IonItem>
          <IonIcon class="contact" icon={globe} item-start></IonIcon>
            <IonCardContent>
              <h3>Website</h3>
              <p>www.frankallart.co.uk</p>
              </IonCardContent>
            </IonItem>
        </IonCard>
        {/*<button id="addtocontactButton" onClick={addContact}>Add to Contact</button>*/}
      </IonContent>
    </IonPage>
  );

 

};

export default ContactPg;
