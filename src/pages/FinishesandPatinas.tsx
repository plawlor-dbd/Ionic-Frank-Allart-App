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
  IonButton,
  IonIcon,
  IonPopover,
  IonLabel,
  IonRow,
  IonCol,
  IonItem
} from '@ionic/react';
import '../styles/FinishesandPatinas.css';
import { Images, getProductImages } from '../data/ProductImages';
import ProductSlider from '../components/ProductSlider';
import ProductThumbnail from '../components/ProductThumbnail';


const FinishesandPatinas: React.FC = () => {
  const [ProductImages, setProductImages] = useState<Images[]>([]);
  const [showPopover, setShowPopover] = useState(false);
  const [sliderIsOpen, setSliderIsOpen] = useState(false)
  const [openOnSlide, setOpenOnSlide] = useState(0)
  const filteredImages = ProductImages.filter((pi) => pi.pageName === "F&P" )

  useIonViewWillEnter(() => {
    const pimg = getProductImages();
    setProductImages(pimg);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  const handleOpenSlider = (slideToOpen) => {
    setOpenOnSlide(slideToOpen)
    setSliderIsOpen(true)
  }

  const handleCloseSlider = () =>
    setSliderIsOpen(false)

  return (
    <IonPage id="FinishesandPatinas">
      <IonHeader>
        <IonToolbar>
        <IonButtons  slot="start">
          <IonButton routerLink="..">
            <IonIcon slot="icon-only" src="assets/icon/chevron-back-outline.svg"/>
            </IonButton>
        </IonButtons>
          <IonTitle>Metal Finishes and Patinas
          </IonTitle>
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
      <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonRow class="smallInfo">
          <IonCol class="smallInfoLeft">
        <IonLabel><p>Metal Finishes and Patinas</p></IonLabel>
        </IonCol>
        <IonCol class="smallInfoRight">
        <IonLabel ><p>2 Photos</p></IonLabel>
        </IonCol>
        </IonRow>
        <IonList id="productGalleryls">
        {filteredImages.map((image, index) => (
            <ProductThumbnail
              key={image.id}
              slideIndex={index}
              id={image.id}
              src={image.src}
              handleOpenSlider={handleOpenSlider}
            />
          ))}
        </IonList>
        {sliderIsOpen && (
          <ProductSlider
            slides={filteredImages}
            openOnSlide={openOnSlide}
            handleCloseSlider={handleCloseSlider}
          />
        )}
        
      </IonContent>
    </IonPage>
  );
};

export default FinishesandPatinas;
