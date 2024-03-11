import { Redirect, Route } from "react-router-dom";
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact,
    IonSplitPane,
} from "@ionic/react";
import Menu from "./components/Menu";
import Page from "./pages/Page";
import Login from "./pages/Login";

import { IonReactRouter } from "@ionic/react-router";

import {
    playCircle,
    radio,
    library,
    search,
    imageOutline,
    personOutline,
    briefcaseOutline,
    homeOutline,
} from "ionicons/icons";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useState } from "react";

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <Login />
            {/* <IonSplitPane contentId="main">
                <Menu />
                <IonTabs>
                    <IonRouterOutlet id="main">
                        <Route path="/" exact={true}>
                            <Redirect to="/folder/Inbox" />
                        </Route>
                        <Route path="/folder/:name" exact={true}>
                            <Page />
                        </Route>
                    </IonRouterOutlet>

                    <IonTabBar slot="bottom">
                        <IonTabButton tab="home" href="/folder/home">
                            <IonIcon icon={homeOutline} />
                            <IonLabel>Home</IonLabel>
                        </IonTabButton>

                        <IonTabButton tab="jobs" href="/folder/Jobs">
                            <IonIcon icon={briefcaseOutline} />
                            <IonLabel>Jobs</IonLabel>
                        </IonTabButton>

                        <IonTabButton tab="search" href="/folder/Search">
                            <IonIcon icon={search} />
                            <IonLabel>Search</IonLabel>
                        </IonTabButton>

                        <IonTabButton tab="gallery" href="/folder/Gallery">
                            <IonIcon icon={imageOutline} />
                            <IonLabel>Gallery</IonLabel>
                        </IonTabButton>

                        <IonTabButton tab="profile" href="/folder/Profile">
                            <IonIcon icon={personOutline} />
                            <IonLabel>Profile</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonSplitPane> */}
        </IonReactRouter>
    </IonApp>
);

export default App;
