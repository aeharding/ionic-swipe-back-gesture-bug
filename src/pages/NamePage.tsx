import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { useParams } from "react-router";

const NamePage = () => {
  const router = useIonRouter();
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>/{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {name === "one" ? (
          <IonButton onClick={() => router.push("/two", undefined, "replace")}>
            Navigate (replace) /two
          </IonButton>
        ) : (
          <IonButton routerLink="/two/details">Navigate /two/details</IonButton>
        )}
      </IonContent>
    </IonPage>
  );
};

export default NamePage;
