import React, { useRef } from 'react'
import { IonSlides, IonSlide, IonImg } from '@ionic/react'
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
	openOnSlide: number
	handleCloseSlider: () => void
}

const ProductSlider: React.FC<ProductSliderProps> = ({ slides, openOnSlide, handleCloseSlider }) => {
	const slidesRef = useRef(null)

  const handleChangeSlide = async (direction) => {
		const swiper = await slidesRef.current.getSwiper()
		
		if (direction === 'next') {
			swiper.slideNext()
		} else {
			// Assume previous slide
			swiper.slidePrev()
		}
	}
	
	return (
		<div className="ProductSlider">
			<button
				className="ProductSlider__close"
				onClick={handleCloseSlider}
			>
				Close
			</button>
			<IonSlides
				ref={slidesRef}
				options={{initialSlide: openOnSlide}}
			>
				{slides.map(slide => (
					<IonSlide key={slide.id}>
						 <TransformWrapper>
          					<TransformComponent>
								<IonImg className="slideImg"
									key={slide.id}
									class="ProductSlider__img"
									src={slide.src}
								/>
							</TransformComponent>
						</TransformWrapper>
						<p>{slide.title}</p>
					</IonSlide>
				))}
				
			</IonSlides>
			
			{/** <button onClick={() => handleChangeSlide('prev')}>Prev</button>
			<button onClick={() => handleChangeSlide('next')}>Next</button>*/}
		</div>
	)
}

export default ProductSlider
