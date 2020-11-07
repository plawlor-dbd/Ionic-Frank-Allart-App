import React, { useState } from 'react'
import {
	IonHeader,
	IonToolbar,
	IonButtons,
	IonButton,
	IonIcon,
	IonTitle,
	IonPopover,
	IonItem,
	IonLabel
} from '@ionic/react'

interface HeaderProps {
	heading: string
}

const Header: React.FC<HeaderProps> = ({ heading }) => {
	const [showPopover, setShowPopover] = useState(false)

	return (
		<IonHeader>
			<IonToolbar>
			<IonButtons slot="start">
				<IonButton routerLink="..">
					<IonIcon slot="icon-only" src="assets/icon/chevron-back-outline.svg"/>
				</IonButton>
			</IonButtons>
				<IonTitle>{heading}</IonTitle>
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
	)
}

export default Header
