import {
    IonPage,
    IonButton,
    IonItem,
    IonThumbnail,
    IonText,
    IonInput,
    IonSelect,
    IonSelectOption,
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

import { Redirect, Route } from "react-router-dom";

import Menu from "../components/Menu";
import Page from "./Page";
import {
    call,
    notifications,
    playCircle,
    radio,
    library,
    search,
    imageOutline,
    personOutline,
    briefcaseOutline,
    homeOutline,
} from "ionicons/icons";
import { useParams } from "react-router";
import OtpInput from "react-otp-input";
import "./Login.css";
import { useState } from "react";

const Login: React.FC = () => {
    const [mob, setMob] = useState(false);
    const [ottp, setOttp] = useState(false);
    const [otp, setOtp] = useState("");
    const [home, setHome] = useState(false);
    return (
        <IonPage>
            {mob && !ottp && !home ? (
                <>
                    <img
                        alt="Silhouette of mountains"
                        src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                        style={{
                            marginTop: "40%",
                            paddingBottom: "0%",
                            marginBottom: "0%",
                            marginLeft: "20%",
                            marginRight: "20%",
                        }}
                    />
                    <IonText style={{ marginLeft: "15%", color: "grey" }}>
                        Enter the 4 digit code you received
                    </IonText>
                    <div style={{ marginLeft: "13%", color: "grey" }}>
                        <OtpInput
                            inputStyle={{
                                margin: "2%",
                                border: "1px solid transparent",
                                borderRadius: "8px",
                                width: "54px",
                                height: "54px",
                                fontSize: "20px",
                                color: "#000",
                                fontWeight: "400",
                            }}
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            renderInput={(props) => <input {...props} />}
                        />
                    </div>
                    <IonButton
                        style={{
                            marginLeft: "8%",
                            marginRight: "8%",
                        }}
                        onClick={() => setOttp(true)}
                    >
                        Verify
                    </IonButton>
                    <IonItem
                        style={{
                            marginLeft: "8%",
                            marginRight: "8%",
                        }}
                    >
                        Didn't receive OTP?
                        <IonButton fill="clear">Resend</IonButton>
                    </IonItem>
                    <IonButton
                        style={{
                            marginBottom: "55%",
                            marginLeft: "8%",
                            marginRight: "8%",
                        }}
                        fill="clear"
                    >
                        Change Phone Number
                    </IonButton>
                </>
            ) : (
                <></>
            )}
            {!mob && !home ? (
                <>
                    <img
                        alt="Silhouette of mountains"
                        src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                        style={{
                            marginTop: "40%",
                            paddingBottom: "0%",
                            marginBottom: "0%",
                            marginLeft: "20%",
                            marginRight: "20%",
                        }}
                    />
                    <IonText style={{ marginLeft: "10%", color: "grey" }}>
                        We will send a one time SMS message
                    </IonText>
                    <IonItem
                        style={{
                            borderRadius: "8px",
                            marginTop: "0%",
                            marginLeft: "8%",
                            marginRight: "8%",
                        }}
                    >
                        <IonThumbnail slot="start">
                            <img
                                alt="Silhouette of mountains"
                                src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                                style={{
                                    height: "40px",
                                    width: "80px",
                                    marginTop: "9px",
                                }}
                            />
                        </IonThumbnail>
                        <IonInput
                            label="Enter Phone Number"
                            labelPlacement="floating"
                        ></IonInput>
                    </IonItem>
                    <IonButton
                        style={{
                            marginLeft: "8%",
                            marginRight: "8%",
                        }}
                        onClick={() => setMob(true)}
                    >
                        Get OTP
                    </IonButton>
                    <IonItem
                        style={{
                            marginBottom: "55%",
                            marginLeft: "8%",
                            marginRight: "8%",
                        }}
                    >
                        Not Looking for Jobs?{" "}
                        <IonButton fill="clear">Apply Jobs</IonButton>
                    </IonItem>
                </>
            ) : (
                <></>
            )}
            {mob && ottp && !home ? (
                <>
                    <img
                        alt="Silhouette of mountains"
                        src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                        style={{
                            marginTop: "20%",
                            paddingBottom: "0%",
                            marginBottom: "0%",
                            marginLeft: "20%",
                            marginRight: "20%",
                        }}
                    />
                    <h1 style={{ marginLeft: "10%" }}>
                        Hire hotel and restaurant staff.{" "}
                        <span style={{ color: "orange" }}>Faster & Free</span>
                    </h1>
                    <IonItem
                        style={{
                            borderRadius: "8px",
                            marginTop: "0%",
                            marginLeft: "10%",
                            marginRight: "10%",
                        }}
                    >
                        <IonInput
                            label="Company Name"
                            labelPlacement="stacked"
                        ></IonInput>
                    </IonItem>
                    <IonSelect
                        label="Company Type"
                        labelPlacement="stacked"
                        fill="outline"
                        style={{ margin: "10%", width: "80%" }}
                    >
                        <IonSelectOption value="apple">Apple</IonSelectOption>
                        <IonSelectOption value="banana">Banana</IonSelectOption>
                        <IonSelectOption value="orange">Orange</IonSelectOption>
                    </IonSelect>
                    <IonButton
                        style={{
                            marginLeft: "10%",
                            marginRight: "10%",
                            marginBottom: "40%",
                        }}
                        onClick={() => setHome(true)}
                    >
                        Continue
                    </IonButton>
                </>
            ) : (
                <></>
            )}
            {home ? (
                <>
                    <IonSplitPane contentId="main">
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

                                <IonTabButton
                                    tab="search"
                                    href="/folder/Search"
                                >
                                    <IonIcon icon={search} />
                                    <IonLabel>Search</IonLabel>
                                </IonTabButton>

                                <IonTabButton
                                    tab="gallery"
                                    href="/folder/Gallery"
                                >
                                    <IonIcon icon={imageOutline} />
                                    <IonLabel>Gallery</IonLabel>
                                </IonTabButton>

                                <IonTabButton
                                    tab="profile"
                                    href="/folder/Profile"
                                >
                                    <IonIcon icon={personOutline} />
                                    <IonLabel>Profile</IonLabel>
                                </IonTabButton>
                            </IonTabBar>
                        </IonTabs>
                    </IonSplitPane>
                </>
            ) : (
                <></>
            )}
        </IonPage>
    );
};

export default Login;
