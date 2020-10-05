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
  IonRow} from "@ionic/react";
import React, { useState } from "react";
import './AlphabeticalIndex.css';
import ProductImagesItem from '../components/ProductImagesItem';
  import { Images, getProductImages } from '../data/ProductImages';

const AlphabticalIndex: React.FC = () => {
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
      
        <IonPage id="AlphabeticalIndexes">
      <IonHeader>
        <IonToolbar>
        <IonButtons  slot="start">
          <IonButton href="/home/Indexes">
            <IonIcon slot="icon-only" src="assets/icon/chevron-back-outline.svg"/>
            </IonButton>
        </IonButtons>
          <IonTitle>Alphabetical Index</IonTitle>
          <IonButtons slot="end">
          <IonButton class="actionButton" onClick={() => setShowPopover(true)}>
            <IonIcon slot="icon-only" src="assets/icon/ellipsis-vertical-outline.svg"/>
          </IonButton>
        </IonButtons>
        <IonPopover
            isOpen={showPopover}
            cssClass='my-custom-class'
            onDidDismiss={e => setShowPopover(false)}>
             <a href="/Notifications"><IonIcon slot="icon-only" src="assets/icon/notifications-outline.svg"/>Notifications</a>
            <hr id="solid"></hr>
            <a href="/Search"><IonIcon slot="icon-only" src="assets/icon/search-outline.svg"/>Search</a>
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
        <IonLabel><p>Alphabetical Index</p></IonLabel>
        </IonCol>
        <IonCol class="smallInfoRight">
        <IonLabel><p>1 Photos</p></IonLabel>
        </IonCol >
        </IonRow>
        <IonList id="productGalleryls">
        {ProductImages.filter((pi) => pi.pageName === 'AI').map( pi => <ProductImagesItem key={pi.id} productImages={pi} />)}
        </IonList>
      </IonList>
      </IonContent>
    </IonPage>
    );
};
export default AlphabticalIndex;