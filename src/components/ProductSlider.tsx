import React from 'react'
import { IonSlides, IonSlide, IonContent } from '@ionic/react'
import ProductImagesItem from '../components/ProductImagesItem'

interface Slide {
	pageName: string
	src: string
	title: string
	id: number
}

interface ProductSliderProps {
	slides: Slide[]
}

const ProductSlider: React.FC<ProductSliderProps> = ({ slides }) => {
	return (
		<IonContent>
			<IonSlides>
				{slides.map(slide => (
					<IonSlide key={slide.id}>
						<ProductImagesItem
							key={slide.id}
							productImages={slide}
						/>
					</IonSlide>
				))}
			</IonSlides>
		</IonContent>
	)
}

export default ProductSlider
