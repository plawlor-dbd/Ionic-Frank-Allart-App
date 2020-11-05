import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import AllartSelect from './pages/AllartSelect';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import DoorFurniture from './pages/DoorFurniture';
import CabinetFurniture from './pages/CabinetFurniture';
import DoorBoltsandCremone from './pages/DoorBoltsandCremone';
import WindowFurniture from './pages/WindowFurniture';
import Miscellaneous from './pages/Miscellaneous';
import FinishesandPatinas from './pages/FinishesandPatinas';
import Indexes from './pages/Indexes';
import Contact from './pages/ContactPg';
import ProductGallery from './pages/ProductGallery';
import ProductGalleryST1 from './pages/ProductGalleryST1';
import ProductGalleryST2 from './pages/ProductGalleryST2';
import ProductGalleryST3 from './pages/ProductGalleryST3';
import ProductGalleryST4 from './pages/ProductGalleryST4';
import ProductGalleryST5 from './pages/ProductGalleryST5';
import ProductGalleryST6 from './pages/ProductGalleryST6';
import ProductGalleryST7 from './pages/ProductGalleryST7';
import ProductGalleryDF1 from './pages/ProductGalleryDF1';
import ProductGalleryDF2 from './pages/ProductGalleryDF2';
import ProductGalleryDF3 from './pages/ProductGalleryDF3';
import ProductGalleryDF4 from './pages/ProductGalleryDF4';
import ProductGalleryDF5 from './pages/ProductGalleryDF5';
import ProductGalleryDF6 from './pages/ProductGalleryDF6';
import ProductGalleryCF1 from './pages/ProductGalleryCF1';
import ProductGalleryCF2 from './pages/ProductGalleryCF2';
import ProductGalleryCF3 from './pages/ProductGalleryCF3';
import ProductGalleryDB1 from './pages/ProductGalleryDB1';
import ProductGalleryDB2 from './pages/ProductGalleryDB2';
import ProductGalleryDB3 from './pages/ProductGalleryDB3';
import ProductGalleryDB4 from './pages/ProductGalleryDB4';
import ProductGalleryWF1 from './pages/ProductGalleryWF1';
import ProductGalleryWF2 from './pages/ProductGalleryWF2';
import ProductGalleryWF3 from './pages/ProductGalleryWF3';
import ProductGalleryWF4 from './pages/ProductGalleryWF4';
import ProductGalleryMC1 from './pages/ProductGalleryMC1';
import ProductGalleryMC2 from './pages/ProductGalleryMC2';
import ProductGalleryMC3 from './pages/ProductGalleryMC3';
import ProductGalleryMC4 from './pages/ProductGalleryMC4';
import ProductGalleryMC5 from './pages/ProductGalleryMC5';
import AlphabticalIndex from './pages/AlphabeticalIndex';
import NumericalIndex from './pages/NumericaIlndex';
import Notifications from './pages/Notifications';
import Search from './pages/Search';


const App: React.FC = () => (
  <IonApp>
  <IonReactRouter>
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} exact={true} />
          <Route path="/home/AllartSelect" component={AllartSelect} exact={true} />
          <Route path="/Notifications" component={Notifications} exact={true} />
          <Route path="/Search" component={Search} exact={true} />
          <Route path="/home/AllartSelect/ProductGalleryST1" component={ProductGalleryST1} exact={true} />
          <Route path="/home/AllartSelect/ProductGalleryST2" component={ProductGalleryST2} exact={true} />
          <Route path="/home/AllartSelect/ProductGalleryST3" component={ProductGalleryST3} exact={true} />
          <Route path="/home/AllartSelect/ProductGalleryST4" component={ProductGalleryST4} exact={true} />
          <Route path="/home/AllartSelect/ProductGalleryST5" component={ProductGalleryST5} exact={true} />
          <Route path="/home/AllartSelect/ProductGalleryST6" component={ProductGalleryST6} exact={true} />
          <Route path="/home/AllartSelect/ProductGalleryST7" component={ProductGalleryST7} exact={true} />
          <Route path="/home/DoorFurniture" component={DoorFurniture} exact={true} />
          <Route path="/home/DoorFurniture/ProductGalleryDF1" component={ProductGalleryDF1} exact={true} />
          <Route path="/home/DoorFurniture/ProductGalleryDF2" component={ProductGalleryDF2} exact={true} />
          <Route path="/home/DoorFurniture/ProductGalleryDF3" component={ProductGalleryDF3} exact={true} />
          <Route path="/home/DoorFurniture/ProductGalleryDF4" component={ProductGalleryDF4} exact={true} />
          <Route path="/home/DoorFurniture/ProductGalleryDF5" component={ProductGalleryDF5} exact={true} />
          <Route path="/home/DoorFurniture/ProductGalleryDF6" component={ProductGalleryDF6} exact={true} />
          <Route path="/home/CabinetFurniture" component={CabinetFurniture} exact={true} />
          
          <Route path="/home/CabinetFurniture/ProductGallery/:imagesListID" component={ProductGallery} exact={true} />
          
          <Route path="/home/CabinetFurniture/ProductGalleryCF1" component={ProductGalleryCF1} exact={true} />
          <Route path="/home/CabinetFurniture/ProductGalleryCF2" component={ProductGalleryCF2} exact={true} />
          <Route path="/home/CabinetFurniture/ProductGalleryCF3" component={ProductGalleryCF3} exact={true} />
          <Route path="/home/DoorBoltsandCremone" component={DoorBoltsandCremone} exact={true} />
          <Route path="/home/DoorBoltsandCremone/ProductGalleryDB1" component={ProductGalleryDB1} exact={true} />
          <Route path="/home/DoorBoltsandCremone/ProductGalleryDB2" component={ProductGalleryDB2} exact={true} />
          <Route path="/home/DoorBoltsandCremone/ProductGalleryDB3" component={ProductGalleryDB3} exact={true} />
          <Route path="/home/DoorBoltsandCremone/ProductGalleryDB4" component={ProductGalleryDB4} exact={true} />
          <Route path="/home/WindowFurniture" component={WindowFurniture} exact={true} />
          <Route path="/home/WindowFurniture/ProductGalleryWF1" component={ProductGalleryWF1} exact={true} />
          <Route path="/home/WindowFurniture/ProductGalleryWF2" component={ProductGalleryWF2} exact={true} />
          <Route path="/home/WindowFurniture/ProductGalleryWF3" component={ProductGalleryWF3} exact={true} />
          <Route path="/home/WindowFurniture/ProductGalleryWF4" component={ProductGalleryWF4} exact={true} />
          <Route path="/home/Miscellaneous" component={Miscellaneous} exact={true} />
          <Route path="/home/Miscellaneous/ProductGalleryMC1" component={ProductGalleryMC1} exact={true} />
          <Route path="/home/Miscellaneous/ProductGalleryMC2" component={ProductGalleryMC2} exact={true} />
          <Route path="/home/Miscellaneous/ProductGalleryMC3" component={ProductGalleryMC3} exact={true} />
          <Route path="/home/Miscellaneous/ProductGalleryMC4" component={ProductGalleryMC4} exact={true} />
          <Route path="/home/Miscellaneous/ProductGalleryMC5" component={ProductGalleryMC5} exact={true} />
          <Route path="/home/FinishesandPatinas" component={FinishesandPatinas} exact={true} />
          <Route path="/home/Indexes" component={Indexes} exact={true} />

          <Route path="/home/Contact" component={Contact} exact={true} />
          <Route path="/home/Indexes/AlphabeticalIndex" component={AlphabticalIndex} exact={true} />
          <Route path="/home/Indexes/NumericalIndex" component={NumericalIndex} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
  </IonReactRouter>
</IonApp>
);


export default App;
