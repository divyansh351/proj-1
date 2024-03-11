import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    IonFooter,
    IonToolbar,
    IonCardSubtitle,
    IonThumbnail,
    IonGrid,
    IonRow,
    IonCardTitle,
    IonButton,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
    archiveOutline,
    archiveSharp,
    bookmarkOutline,
    heartOutline,
    heartSharp,
    mailOutline,
    mailSharp,
    paperPlaneOutline,
    paperPlaneSharp,
    trashOutline,
    trashSharp,
    warningOutline,
    warningSharp,
    locationOutline,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}

const appPages: AppPage[] = [
    {
        title: "Inbox",
        url: "/folder/Inbox",
        iosIcon: mailOutline,
        mdIcon: mailSharp,
    },
    {
        title: "Outbox",
        url: "/folder/Outbox",
        iosIcon: paperPlaneOutline,
        mdIcon: paperPlaneSharp,
    },
    {
        title: "Favorites",
        url: "/folder/Favorites",
        iosIcon: heartOutline,
        mdIcon: heartSharp,
    },
    {
        title: "Archived",
        url: "/folder/Archived",
        iosIcon: archiveOutline,
        mdIcon: archiveSharp,
    },
    {
        title: "Trash",
        url: "/folder/Trash",
        iosIcon: trashOutline,
        mdIcon: trashSharp,
    },
    {
        title: "Spam",
        url: "/folder/Spam",
        iosIcon: warningOutline,
        mdIcon: warningSharp,
    },
];

const labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

const Menu: React.FC = () => {
    const location = useLocation();

    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent>
                <IonList id="inbox-list">
                    <IonItem>
                        <IonThumbnail slot="start">
                            <img
                                alt="Silhouette of mountains"
                                src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                            />
                        </IonThumbnail>
                        <IonGrid>
                            <IonRow>
                                <IonCardTitle>Raandhal</IonCardTitle>
                            </IonRow>
                            <IonRow>
                                <IonButton size="small" fill="outline">
                                    Restaurant
                                </IonButton>
                            </IonRow>
                        </IonGrid>
                    </IonItem>
                    <IonItem>
                        <IonIcon icon={locationOutline}></IonIcon>
                        <IonLabel>Kannur, Kerala</IonLabel>
                    </IonItem>
                    {appPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem
                                    className={
                                        location.pathname === appPage.url
                                            ? "selected"
                                            : ""
                                    }
                                    routerLink={appPage.url}
                                    routerDirection="none"
                                    lines="none"
                                    detail={false}
                                >
                                    <IonIcon
                                        aria-hidden="true"
                                        slot="start"
                                        ios={appPage.iosIcon}
                                        md={appPage.mdIcon}
                                    />
                                    <IonLabel>{appPage.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        );
                    })}
                </IonList>
            </IonContent>
            <IonFooter collapse="fade">
                <IonToolbar>
                    <IonCardSubtitle>App Version: V2.00</IonCardSubtitle>
                </IonToolbar>
            </IonFooter>
        </IonMenu>
    );
};

export default Menu;
