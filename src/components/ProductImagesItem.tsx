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
  const [hasPrevProductImage, setHasPrevProductImage] = useState(false);
  const [hasNextProductImage, setHasNextProductImage] = useState(false);

  const prevNextStyle = {
      fontSize: "10px",
  }

  return (

    
        <IonItem id="prodImgItem">          
          <IonThumbnail id="prodImage" slot="start">
            <IonImg class="productImgBtn" id={"modal-" + productImages.id.toString()} onClick={() => setShowModal(true)} src={productImages.src} />
            <IonModal  isOpen={showModal} cssClass='productModal' onWillPresent={function(){
                const prevImg = document.getElementById("modal-" + (productImages.id-1)); 
                const nextImg = document.getElementById("modal-" + (productImages.id+1));
                console.log(productImages.id+1); 
                console.log(prevImg);
                console.log(nextImg);
                if(!prevImg){setHasPrevProductImage(false);}else{setHasPrevProductImage(true);}
                if(!nextImg){  setHasNextProductImage(false);}else{setHasNextProductImage(true);}}}>
              <IonHeader translucent>
            <IonToolbar>
              <IonButtons slot="end">
                <IonButton  color="dark" id={"close-btn-" + productImages.id.toString()} onClick={() => setShowModal(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
          <TransformWrapper>
          <TransformComponent>
          <img src={productImages.src} alt="productImage" />
          </TransformComponent>
          </TransformWrapper>
          <div style={{display: "inline-block", margin: "0 auto" }}>
            {hasPrevProductImage &&
              <IonButton size="small" style={prevNextStyle} color="dark" className="prev-next-btn" id={"prev-btn-" + productImages.id.toString()} onClick={() => previousSlide((productImages.id).toString())}>&lt;</IonButton>
            }
            
            {hasNextProductImage &&
              <IonButton size="small" style={prevNextStyle} color="dark"  className="prev-next-btn" id={"next-btn-" + productImages.id.toString()} onClick={() => nextSlide((productImages.id).toString())}>&gt;</IonButton>
            }
            </div>
            <p style={{marginTop:"1px"}} id="prodTitle">
              {productImages.title}
            </p>
          </IonContent>
          </IonModal>
        </IonThumbnail>
      </IonItem>

      
  );
};




function previousSlide(id){
  console.log(id);
  document.getElementById("close-btn-" + id.toString()).click();
  id--;
  document.getElementById("modal-" + (id).toString()).click(); 
}

function nextSlide(id){
  console.log(id);
  document.getElementById("close-btn-" + id.toString()).click();
  id++;
  document.getElementById("modal-" + (id).toString()).click();
}




export default ProductImagesItem;

