import React from 'react'
import {
  IonItem,
  IonThumbnail,
  IonImg
} from '@ionic/react'

interface ProductThumbnailProps {
	slideIndex: number
	id: number
	src: string
	handleOpenSlider: (slideToOpen) => void
}

const ProductThumbnail: React.FC<ProductThumbnailProps> = ({ slideIndex, id, src, handleOpenSlider }) => {
  return (
    <IonItem detail={false} className="ProductThumbnail">
			<IonThumbnail className="ProductThumbnail__inner">
				<button
					key={id}
					className="ProductThumbnail__btn u-btn-clear"
					onClick={() => handleOpenSlider(slideIndex)}
				>
					<IonImg class="ProductThumbnail__img productImgBtn" src={src} />
				</button>
			</IonThumbnail>
		</IonItem>
  )
}

export default ProductThumbnail
