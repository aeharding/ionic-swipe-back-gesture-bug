import React from "react";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { Route, Redirect } from "react-router";

import NamePage from "./pages/NamePage";
import NameDetailsPage from "./pages/NameDetailsPage";

function Example() {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Redirect exact path="/" to="/one" />

        <Route path="/:name" render={() => <NamePage />} exact={true} />
        <Route
          path="/:name/details"
          render={() => <NameDetailsPage />}
          exact={true}
        />
      </IonRouterOutlet>
    </IonReactRouter>
  );
}
export default Example;
