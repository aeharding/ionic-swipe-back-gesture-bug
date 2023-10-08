import React from "react";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { Route } from "react-router";

import NamePage from "./pages/NamePage";
import NameDetailsPage from "./pages/NameDetailsPage";

function Example() {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" render={() => <NamePage />} exact={true} />
        <Route
          path="/details"
          render={() => <NameDetailsPage />}
          exact={true}
        />
      </IonRouterOutlet>
    </IonReactRouter>
  );
}
export default Example;
