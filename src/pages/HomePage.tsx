import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Virtuoso } from "react-virtuoso";

const HomePage = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Listen now</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent scrollY={false} fullscreen>
      <IonRefresher
        slot="fixed"
        onIonRefresh={(e) =>
          setTimeout(() => {
            e.detail.complete();
          }, 1000)
        }
      >
        <IonRefresherContent />
      </IonRefresher>
      <Virtuoso
        className="ion-content-scroll-host"
        totalCount={4}
        itemContent={(index) => <div>Item {index}</div>}
      />
    </IonContent>
  </IonPage>
);

export default HomePage;
