import React, { useState } from 'react'
import {
  IonContent,
  IonList,
  IonPage,
  useIonViewWillEnter,
  IonThumbnail,
  IonImg,
  IonLabel
} from '@ionic/react'
import '../styles/AllartSelectStyle.css'
import { Images, getProductImages } from '../data/ProductImages'
import { RouteComponentProps } from 'react-router-dom'
import Header from '../components/Header'
import ProductSlider from '../components/ProductSlider'
import ProductThumbnail from '../components/ProductThumbnail'

interface ProductGalleryProps extends RouteComponentProps<{
  imagesListID: string
}> {}

const ProductGallery: React.FC<ProductGalleryProps> = ({ match }) => {
  const [ProductImages, setProductImages] = useState<Images[]>([])
  const [sliderIsOpen, setSliderIsOpen] = useState(false)
  const [openOnSlide, setOpenOnSlide] = useState(0)
  const filteredImages = ProductImages.filter((pi) => pi.pageName === match.params.imagesListID)
  const imagesListID = match.params.imagesListID

  useIonViewWillEnter(() => {
    const pimg = getProductImages()
    setProductImages(pimg)
  })



  const handleOpenSlider = (slideToOpen) => {
    setOpenOnSlide(slideToOpen)
    setSliderIsOpen(true)
  }

  const handleCloseSlider = () =>
    setSliderIsOpen(false)

  return (
    <IonPage id="product-gallery">
      <Header heading={imagesListID} />
      <IonContent>
        <IonList id="productGalleryTitles">
          <IonThumbnail id="productGalleryTitleImg">
            <IonImg alt={imagesListID} src={`assets/menu-images/${imagesListID.substring(0,2)}.png`}/>
          </IonThumbnail>
          <IonLabel><p>{imagesListID}</p></IonLabel>
          <IonLabel><p>{filteredImages.length} Photos</p></IonLabel>
        </IonList>
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
  )
}

export default ProductGallery
