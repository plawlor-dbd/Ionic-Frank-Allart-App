import React, { useState } from 'react'
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
  IonItem
} from '@ionic/react'
import '../styles/AllartSelectStyle.css'
import ProductImagesItem from '../components/ProductImagesItem'
import { Images, getProductImages } from '../data/ProductImages'
import { RouteComponentProps } from 'react-router-dom'
import ProductSlider from '../components/ProductSlider'

interface ProductGalleryProps extends RouteComponentProps<{
  imagesListID: string
}> {}

const ProductGallery: React.FC<ProductGalleryProps> = ({ match }) => {
  const [ProductImages, setProductImages] = useState<Images[]>([])
  const [showPopover, setShowPopover] = useState(false)
  const filteredImages = ProductImages.filter((pi) => pi.pageName === match.params.imagesListID)
  const numImages = filteredImages.length
  const imagesListID = match.params.imagesListID

  useIonViewWillEnter(() => {
    const pimg = getProductImages()
    setProductImages(pimg)
  })

  const refresh = (e: CustomEvent) => {
    setTimeout(() => e.detail.complete(), 3000)
  }

  return (
    <IonPage id="product-gallery">
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonButton routerLink="..">
            <IonIcon slot="icon-only" src="assets/icon/chevron-back-outline.svg"/>
          </IonButton>
        </IonButtons>
          <IonTitle>{imagesListID}</IonTitle>
          <IonButtons slot="end">
          <IonButton class="actionButton" onClick={() => setShowPopover(true)}>
            <IonIcon slot="icon-only" src="assets/icon/ellipsis-vertical-outline.svg"/>
          </IonButton>
        </IonButtons>
        <IonPopover
          isOpen={showPopover}
          cssClass='my-custom-class'
          onDidDismiss={e => setShowPopover(false)}
        >
          <IonItem
            mode='md'
            detail={false} 
            className="popOverItem"
            routerLink="/Notifications"
          >
            <IonIcon slot="start" src="assets/icon/notifications-outline.svg"/>
            <IonLabel>Notifications</IonLabel>
          </IonItem>
          <hr id="solid"></hr>
          <IonItem
            mode='md'
            detail={false}
            className="popOverItem"
            routerLink="/Search"
          >
            <IonIcon slot="start" src="assets/icon/search-outline.svg"/>
            <IonLabel>Search</IonLabel>
          </IonItem>
          {/*<hr id="solid"></hr>
          <a><IonIcon slot="icon-only" src="assets/icon/thumbs-up-outline.svg"/>Rate Now</a>
          <hr id="solid"></hr>
          <a><IonIcon slot="icon-only" src="assets/icon/share-social-outline.svg"/>Share Now</a>*/}
          </IonPopover>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonList id="productGalleryTitles">
        <IonThumbnail id="productGalleryTitleImg">
          <IonImg alt={imagesListID} src={`assets/menu-images/${imagesListID.substring(0,2)}.png`}/>
        </IonThumbnail>
        <IonLabel><p>{imagesListID}</p></IonLabel>
        <IonLabel><p>{numImages} Photos</p></IonLabel>
        </IonList>
        {/* <IonList id="productGalleryls">
          {filteredImages.map(pi => <ProductImagesItem key={pi.id} productImages={pi} />)}
        </IonList> */}
        <ProductSlider slides={filteredImages} />
      </IonContent>
    </IonPage>
  )
}

export default ProductGallery
