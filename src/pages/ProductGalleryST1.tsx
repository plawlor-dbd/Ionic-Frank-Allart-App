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
  IonPopover,
  IonItem,
  IonModal,
  IonSlide,
  IonSlides,
} from '@ionic/react';
import '../styles/AllartSelectStyle.css';
import ProductImagesItem from '../components/ProductImagesItem';
import { Images, getProductImages } from '../data/ProductImages';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const ProductGalleryST1: React.FC = () => {
  const [ProductImages, setProductImages] = useState<Images[]>([]);
  const [showPopover, setShowPopover] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useIonViewWillEnter(() => {
    const pimg = getProductImages();
    setProductImages(pimg);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  const slideOpts = {
    initialSlide: 2,
    speed: 400
  };
  

  return (
    <IonPage id="product-gallery">
      <IonHeader>
        <IonToolbar>
        <IonButtons  slot="start">
          <IonButton routerLink="/home/AllartSelect/">
            <IonIcon slot="icon-only" src="assets/icon/chevron-back-outline.svg"/>
            </IonButton>
        </IonButtons>
  <IonTitle>ST1</IonTitle>
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
        <IonList id="productGalleryTitles">
        <IonThumbnail id="productGalleryTitleImg">
          <IonImg src="assets/menu-images/ST.png"/>
        </IonThumbnail>
        <IonLabel><p>ST1</p></IonLabel>
        <IonLabel><p>15 Photos</p></IonLabel>
        </IonList>
        <IonList id="productGalleryls">
          {ProductImages.filter((pi) => pi.pageName === 'ST1').map( pi =>(
            <IonItem key={pi.id} id="prodImgItem">          
              <IonThumbnail id="prodImage" slot="start">
                <IonImg onClick={() => setShowModal(true)} src={pi.src} />
              </IonThumbnail>
            </IonItem>
          ))}
        </IonList>
        <IonModal  isOpen={showModal}  cssClass='productModal'>
              <IonHeader translucent>
            <IonToolbar>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
                  <IonSlides pager={false} options={(slideOpts)}>
                {ProductImages.filter((pi) => pi.pageName === 'ST1').map( pi =>(
                  <React.Fragment>
                  <IonSlide key={pi.id}>
                    <TransformWrapper>
                      <TransformComponent>
                        <img alt={pi.pageName} src={pi.src}></img>
                      </TransformComponent>
                    </TransformWrapper>
                  </IonSlide>
                  </React.Fragment>
                ))}
                </IonSlides>
                {/* <p style={{marginTop:"1px"}} id="prodTitle">{pi.title}</p> */}
          </IonContent>
          {/*<img src={productImages.src} alt="productImage" /> */}
          </IonModal>
      </IonContent>
    </IonPage>
  );
};



export default ProductGalleryST1;
