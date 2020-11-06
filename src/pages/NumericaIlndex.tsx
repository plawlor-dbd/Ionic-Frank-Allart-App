import { IonPage, 
  IonHeader, 
  IonToolbar, 
  IonButtons, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonIcon, 
  IonPopover, 
  useIonViewWillEnter, 
  IonList, 
  IonRefresher, 
  IonRefresherContent, 
  IonLabel, 
  IonCol,
  IonRow,
  IonItem} from "@ionic/react";
import React, { useState } from "react";
import '../styles/AlphabeticalIndex.css';
import ProductImagesItem from '../components/ProductImagesItem';
  import { Images, getProductImages } from '../data/ProductImages';

const NumericalIndex: React.FC = () => {
  const [ProductImages, setProductImages] = useState<Images[]>([]);
  const [showPopover, setShowPopover] = useState(false);

  useIonViewWillEnter(() => {
    const pimg = getProductImages();
    setProductImages(pimg);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };
    return (
      
        <IonPage id="NumericalIndexes">
      <IonHeader>
        <IonToolbar>
        <IonButtons  slot="start">
          <IonButton routerLink="/home/Indexes">
            <IonIcon slot="icon-only" src="assets/icon/chevron-back-outline.svg"/>
            </IonButton>
        </IonButtons>
          <IonTitle>Numerical Index</IonTitle>
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
      <IonList id="productGalleryls">
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonRow class="smallInfo">
          <IonCol class="smallInfoLeft">
        <IonLabel><p>Numerical Index</p></IonLabel>
        </IonCol>
        <IonCol class="smallInfoRight">
        <IonLabel><p>2 Photos</p></IonLabel>
        </IonCol>
        </IonRow>
        <IonList id="productGalleryls">
        {ProductImages.filter((pi) => pi.pageName === 'NI').map( pi => <ProductImagesItem key={pi.id} productImages={pi} />)}
        </IonList>
      </IonList>
      </IonContent>
    </IonPage>
    );
};
export default NumericalIndex;