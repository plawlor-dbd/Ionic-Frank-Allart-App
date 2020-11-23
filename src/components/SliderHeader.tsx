import React from 'react'
import {
	IonHeader,
	IonToolbar,
	IonButtons,
	IonButton,
	IonIcon,
	IonTitle,
} from '@ionic/react'

interface SliderHeaderProps {
    handleCloseSlider()
	slidesID: string
}

const SliderHeader: React.FC<SliderHeaderProps> = ({ handleCloseSlider, slidesID }) => {

	return (
		<IonHeader>
			<IonToolbar>
			<IonButtons slot="start">
				<IonButton onClick={handleCloseSlider} routerLink="..">
					<IonIcon slot="icon-only" src="assets/icon/chevron-back-outline.svg"/>
				</IonButton>
			</IonButtons>
				<IonTitle>{slidesID}</IonTitle>
			</IonToolbar>
		</IonHeader>
	)
}

export default SliderHeader
