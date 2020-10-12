import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonButtons,
  IonThumbnail,
  IonImg,
  IonLabel,
  IonButton,
  IonIcon,
  IonPopover
} from '@ionic/react';
import './AllartSelectStyle.css';
import ProductImagesItem from '../components/ProductImagesItem';
import { Images, getProductImages } from '../data/ProductImages';

const ProductGalleryMC5: React.FC = () => {

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
    <IonPage id="product-gallery">
      <IonHeader>
        <IonToolbar>
        <IonButtons  slot="start">
          <IonButton href="/home/Miscellaneous">
            <IonIcon slot="icon-only" src="assets/icon/chevron-back-outline.svg"/>
            </IonButton>
        </IonButtons>
          <IonTitle>MC5</IonTitle>
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
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonList id="productGalleryTitles">
        <IonThumbnail id="productGalleryTitleImg">
          <IonImg src="assets/menu-images/MC.png"/>
        </IonThumbnail>
        <IonLabel><p>MC5</p></IonLabel>
        <IonLabel><p>2 Photos</p></IonLabel>
        </IonList>
        <IonList id="productGalleryls">
        {ProductImages.filter((pi) => pi.pageName === 'MC5').map( pi => <ProductImagesItem key={pi.id} productImages={pi} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ProductGalleryMC5;
