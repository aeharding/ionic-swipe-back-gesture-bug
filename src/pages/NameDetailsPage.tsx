import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";

const NameDetailsPage = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>/{name}/details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>Swipe back broken!</IonContent>
    </IonPage>
  );
};

export default NameDetailsPage;
