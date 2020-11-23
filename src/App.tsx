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
import Indexes from './pages/Indexes';
import Contact from './pages/ContactPg';
import ProductGallery from './pages/ProductGallery';
import Notifications from './pages/Notifications';
import Search from './pages/Search';

import './styles/base/utility.css'


const App: React.FC = () => (
  <IonApp>
  <IonReactRouter>
    <IonRouterOutlet id="main">
      <Route path="/home" component={Home} exact={true} />
      <Route path="/Notifications" component={Notifications} exact={true} />
      <Route path="/Search" component={Search} exact={true} />

      <Route path="/home/AllartSelect" component={AllartSelect} exact={true} />
      <Route path="/home/AllartSelect/ProductGallery/:imagesListID" component={ProductGallery} exact={true} />

      <Route path="/home/DoorFurniture" component={DoorFurniture} exact={true} />
      <Route path="/home/DoorFurniture/ProductGallery/:imagesListID" component={ProductGallery} exact={true} />
      
      <Route path="/home/CabinetFurniture" component={CabinetFurniture} exact={true} />
      <Route path="/home/CabinetFurniture/ProductGallery/:imagesListID" component={ProductGallery} exact={true} />
      
      <Route path="/home/DoorBoltsandCremone" component={DoorBoltsandCremone} exact={true} />
      <Route path="/home/DoorBoltsandCremone/ProductGallery/:imagesListID" component={ProductGallery} exact={true} />

      <Route path="/home/WindowFurniture" component={WindowFurniture} exact={true} />
      <Route path="/home/WindowFurniture/ProductGallery/:imagesListID" component={ProductGallery} exact={true} />

      <Route path="/home/Miscellaneous" component={Miscellaneous} exact={true} />
      <Route path="/home/Miscellaneous/ProductGallery/:imagesListID" component={ProductGallery} exact={true} />

      {/*<Route path="/home/FinishesandPatinas" component={FinishesandPatinas} exact={true} />*/}
      <Route path="/home/ProductGallery/:imagesListID" component={ProductGallery} exact={true} />
      

      <Route path="/home/Indexes" component={Indexes} exact={true} />
      {/*<Route path="/home/Indexes/AlphabeticalIndex" component={AlphabticalIndex} exact={true} />*/}
      <Route path="/home/Indexes/ProductGallery/:imagesListID" component={ProductGallery} exact={true} />
      {/*<Route path="/home/Indexes/NumericalIndex" component={NumericalIndex} exact={true} />*/}
      <Route path="/home/Indexes/ProductGallery/:imagesListID" component={ProductGallery} exact={true} />

      <Route path="/home/Contact" component={Contact} exact={true} />
      <Route exact path="/" render={() => <Redirect to="/home" />} />
    </IonRouterOutlet>
  </IonReactRouter>
</IonApp>
);


export default App;
