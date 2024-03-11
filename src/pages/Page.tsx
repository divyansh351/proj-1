import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonIcon,
    IonItem,
    IonLabel,
    IonCol,
    IonGrid,
    IonRow,
    IonImg,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonListHeader,
    IonThumbnail,
    IonSegment,
} from "@ionic/react";
import { call, notifications } from "ionicons/icons";
import { useParams } from "react-router";
import "./Page.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Page: React.FC = () => {
    const { name } = useParams<{ name: string }>();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonItem>
                        <IonItem button>
                            <IonIcon
                                aria-hidden="true"
                                icon={call}
                                slot="end"
                                size="small"
                            ></IonIcon>
                        </IonItem>
                        <IonLabel color="medium">Need Support?</IonLabel>
                        <IonItem button>
                            <IonIcon
                                size="small"
                                aria-hidden="true"
                                icon={notifications}
                                slot="end"
                            ></IonIcon>
                        </IonItem>
                    </IonItem>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonImg
                    src="https://ionic-docs-demo-v7.vercel.app/assets/madison.jpg"
                    alt="The Wisconsin State Capitol building in Madison, WI at night"
                ></IonImg>
                <IonGrid style={{ padding: "0 0 0 0" }}>
                    <IonRow>
                        <IonCol>
                            <IonCard color="light">
                                <IonCardHeader style={{ padding: "0 0 0 0" }}>
                                    <IonGrid>
                                        <IonRow>
                                            <IonCol>
                                                <IonRow>
                                                    <IonCardTitle>
                                                        Welcome{" "}
                                                        <span
                                                            style={{
                                                                color: "orange",
                                                            }}
                                                        >
                                                            Raandhal
                                                        </span>
                                                    </IonCardTitle>
                                                </IonRow>
                                                <IonRow>
                                                    <IonButton
                                                        size="small"
                                                        color="secondary"
                                                    >
                                                        Post a Job
                                                    </IonButton>
                                                </IonRow>
                                            </IonCol>
                                            <IonCol>
                                                <IonImg
                                                    style={{
                                                        padding: "0 0 0 0",
                                                    }}
                                                    src="https://ionic-docs-demo-v7.vercel.app/assets/madison.jpg"
                                                    alt="The Wisconsin State Capitol building in Madison, WI at night"
                                                ></IonImg>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Jobs Posted</IonCardTitle>
                                    <IonCardSubtitle>12</IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Applicants</IonCardTitle>
                                    <IonCardSubtitle>45</IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid>
                    <IonRow style={{ padding: "0 0 0 0" }}>
                        <IonCol style={{ padding: "0 0 0 0" }}>
                            <IonImg
                                style={{ padding: "0 0 0 0" }}
                                src="https://ionic-docs-demo-v7.vercel.app/assets/madison.jpg"
                                alt="The Wisconsin State Capitol building in Madison, WI at night"
                            ></IonImg>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid>
                    <IonListHeader>
                        <IonLabel>
                            <h1>My Jobs</h1>
                        </IonLabel>
                        <IonButton>See All</IonButton>
                    </IonListHeader>
                    <IonCard>
                        <IonCardContent>
                            <IonItem>
                                <IonThumbnail slot="start">
                                    <img
                                        alt="Silhouette of mountains"
                                        src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                                    />
                                </IonThumbnail>
                                <IonGrid>
                                    <IonRow>
                                        <IonCardTitle>Card Title</IonCardTitle>
                                    </IonRow>
                                    <IonRow>
                                        <IonCardSubtitle>
                                            Card Subtitle
                                        </IonCardSubtitle>
                                    </IonRow>
                                    <IonRow>
                                        <IonCardSubtitle color="secondary">
                                            Button
                                        </IonCardSubtitle>
                                    </IonRow>
                                </IonGrid>
                            </IonItem>
                        </IonCardContent>
                    </IonCard>
                    <IonCard>
                        <IonCardContent>
                            <IonItem>
                                <IonThumbnail slot="start">
                                    <img
                                        alt="Silhouette of mountains"
                                        src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                                    />
                                </IonThumbnail>
                                <IonGrid>
                                    <IonRow>
                                        <IonCardTitle>Card Title</IonCardTitle>
                                    </IonRow>
                                    <IonRow>
                                        <IonCardSubtitle>
                                            Card Subtitle
                                        </IonCardSubtitle>
                                    </IonRow>
                                    <IonRow>
                                        <IonCardSubtitle color="secondary">
                                            Button
                                        </IonCardSubtitle>
                                    </IonRow>
                                </IonGrid>
                            </IonItem>
                        </IonCardContent>
                    </IonCard>
                    <IonCard>
                        <IonCardContent>
                            <IonItem>
                                <IonThumbnail slot="start">
                                    <img
                                        alt="Silhouette of mountains"
                                        src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                                    />
                                </IonThumbnail>
                                <IonGrid>
                                    <IonRow>
                                        <IonCardTitle>Card Title</IonCardTitle>
                                    </IonRow>
                                    <IonRow>
                                        <IonCardSubtitle>
                                            Card Subtitle
                                        </IonCardSubtitle>
                                    </IonRow>
                                    <IonRow>
                                        <IonCardSubtitle color="secondary">
                                            Button
                                        </IonCardSubtitle>
                                    </IonRow>
                                </IonGrid>
                            </IonItem>
                        </IonCardContent>
                    </IonCard>
                </IonGrid>
                <IonListHeader>
                    <IonLabel>
                        <h1>Adidhi Learn</h1>
                    </IonLabel>
                    <IonButton>See All</IonButton>
                </IonListHeader>

                <Swiper
                    spaceBetween={5}
                    slidesPerView={1.5}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <IonCard>
                            <img
                                alt="Silhouette of mountains"
                                src="https://ionicframework.com/docs/img/demos/card-media.png"
                            />
                        </IonCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <IonCard>
                            <img
                                alt="Silhouette of mountains"
                                src="https://ionicframework.com/docs/img/demos/card-media.png"
                            />
                        </IonCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <IonCard>
                            <img
                                alt="Silhouette of mountains"
                                src="https://ionicframework.com/docs/img/demos/card-media.png"
                            />
                        </IonCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <IonCard>
                            <img
                                alt="Silhouette of mountains"
                                src="https://ionicframework.com/docs/img/demos/card-media.png"
                            />
                        </IonCard>
                    </SwiperSlide>
                </Swiper>
            </IonContent>
        </IonPage>
    );
};

export default Page;
