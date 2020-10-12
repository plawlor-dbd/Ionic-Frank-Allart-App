import React, { useState } from 'react';
import {
  IonItem,
  IonThumbnail,
  IonImg,
  IonContent,
  IonModal,
  IonButton,
  IonButtons,
  IonHeader,
  IonToolbar,
  } from '@ionic/react';
import { Images } from '../data/ProductImages';
import './ProductImagesItem.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
interface ProductImagesItemProps {
    productImages: Images;
}





const ProductImagesItem: React.FC<ProductImagesItemProps> = ({ productImages }) => {
  const [showModal, setShowModal] = useState(false);
  return (
        <IonItem id="prodImgItem">
          <IonThumbnail id="prodImage" slot="start">
            <IonImg class="productImgBtn" onClick={() => setShowModal(true)} src={productImages.src} />
          <IonModal isOpen={showModal} cssClass='productModal'>
              <IonHeader translucent>
            <IonToolbar>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
          <TransformWrapper>
        <TransformComponent>
          <img src={productImages.src} alt="productImage" />
        </TransformComponent>
      </TransformWrapper>
            <p  id="prodTitle">
              {productImages.title}
            </p>
          </IonContent>
          </IonModal>
          </IonThumbnail>
        </IonItem>
  );
  
};

export default ProductImagesItem;
