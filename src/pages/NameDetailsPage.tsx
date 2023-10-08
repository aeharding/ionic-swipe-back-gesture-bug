import React from "react";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const NameDetailsPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>/details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>
          Try to swipe back. Observe the ion-item-sliding is sometimes triggered
        </div>

        <IonItemSliding>
          <IonItemOptions side="start">
            <IonItemOption color="success">Archive</IonItemOption>
          </IonItemOptions>

          <IonItem>
            <IonLabel>Sliding Item with Start Options</IonLabel>
          </IonItem>
        </IonItemSliding>

        <IonItemSliding>
          <IonItemOptions side="start">
            <IonItemOption color="success">Archive</IonItemOption>
          </IonItemOptions>

          <IonItem>
            <IonLabel>Sliding Item with Start Options</IonLabel>
          </IonItem>
        </IonItemSliding>

        <IonItemSliding>
          <IonItemOptions side="start">
            <IonItemOption color="success">Archive</IonItemOption>
          </IonItemOptions>

          <IonItem>
            <IonLabel>Sliding Item with Start Options</IonLabel>
          </IonItem>
        </IonItemSliding>

        <IonItemSliding>
          <IonItemOptions side="start">
            <IonItemOption color="success">Archive</IonItemOption>
          </IonItemOptions>

          <IonItem>
            <IonLabel>Sliding Item with Start Options</IonLabel>
          </IonItem>
        </IonItemSliding>

        <IonItemSliding>
          <IonItemOptions side="start">
            <IonItemOption color="success">Archive</IonItemOption>
          </IonItemOptions>

          <IonItem>
            <IonLabel>Sliding Item with Start Options</IonLabel>
          </IonItem>
        </IonItemSliding>

        <IonItemSliding>
          <IonItemOptions side="start">
            <IonItemOption color="success">Archive</IonItemOption>
          </IonItemOptions>

          <IonItem>
            <IonLabel>Sliding Item with Start Options</IonLabel>
          </IonItem>
        </IonItemSliding>

        <IonItemSliding>
          <IonItemOptions side="start">
            <IonItemOption color="success">Archive</IonItemOption>
          </IonItemOptions>

          <IonItem>
            <IonLabel>Sliding Item with Start Options</IonLabel>
          </IonItem>
        </IonItemSliding>
      </IonContent>
    </IonPage>
  );
};

export default NameDetailsPage;
