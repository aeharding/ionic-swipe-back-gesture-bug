import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";

const FooUserPage = () => {
  const params = useParams<{ user: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>/foo/{params.user}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {params.user === "alex" ? (
          <IonButton routerLink="/baz">Navigate /baz</IonButton>
        ) : (
          <ol>
            <li>Swipe back once (successful)</li>
            <li>Try to swipe back again, observe it is not possible</li>
          </ol>
        )}
      </IonContent>
    </IonPage>
  );
};

export default FooUserPage;
