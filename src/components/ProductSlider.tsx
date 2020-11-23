import React from 'react'
import { IonSlides, IonSlide} from '@ionic/react'
import '../styles/ProductSlider.css'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

interface Slide {
	pageName: string
	src: string
	title: string
	id: number
}

interface ProductSliderProps {
	slides: Slide[]
}

const ProductSlider: React.FC<ProductSliderProps> = ({ slides}) => {

	const slideOpt ={
		initialSlide: 0
	}

	
	return (
		<div className="ProductSlider">
				<IonSlides
				options={slideOpt}
			>
				{slides.map(slide => (
					
						<IonSlide key={slide.id}>
							<TransformWrapper
							defaultScale={1}
							defaultPositionX={0}
							defaultPositionY={0}>
								<TransformComponent>
									<img alt={slide.title} className="slideImg"
										key={slide.id}

										src={slide.src} />
								</TransformComponent>
							</TransformWrapper>
							<p style={{marginTop:'4px'}}>{slide.title}</p>
						</IonSlide>
				))}
				
			</IonSlides>
		</div>
	)
}

export default ProductSlider
