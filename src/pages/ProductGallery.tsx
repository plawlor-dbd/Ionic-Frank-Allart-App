import React, { useState } from 'react'
import {
  IonContent,
  IonPage,
  useIonViewWillEnter,

} from '@ionic/react'
import '../styles/AllartSelectStyle.css'
import { Images, getProductImages } from '../data/ProductImages'
import { RouteComponentProps } from 'react-router-dom'
import ProductSlider from '../components/ProductSlider'
import SliderHeader from '../components/SliderHeader'

interface ProductGalleryProps extends RouteComponentProps<{
  imagesListID: string
}> {}

const ProductGallery: React.FC<ProductGalleryProps> = ({ match }) => {
  const [ProductImages, setProductImages] = useState<Images[]>([])
  const [sliderIsOpen, setSliderIsOpen] = useState(false)
  const filteredImages = ProductImages.filter((pi) => pi.pageName === match.params.imagesListID)
  const imagesListID = match.params.imagesListID

  useIonViewWillEnter(() => {
    const pimg = getProductImages()
    setProductImages(pimg)
    setSliderIsOpen(true)
  })

  const handleCloseSlider = () =>
    setSliderIsOpen(false)
    
 
  return (
    <IonPage  id="product-gallery">
      <SliderHeader 
      handleCloseSlider ={handleCloseSlider}
      slidesID = {imagesListID}
      />
      <IonContent>
      {sliderIsOpen && (
          <ProductSlider
            slides={filteredImages}
          />
        )}
      </IonContent>
    </IonPage>
  )
}

export default ProductGallery
