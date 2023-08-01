import React from "react";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { Route, Redirect } from "react-router";

import FooUserPage from "./pages/FooUserPage";
import BazPage from "./pages/BazPage";

function Example() {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Redirect exact path="/" to="/foo/alex" />

        <Route path="/foo/:user" render={() => <FooUserPage />} exact={true} />
        <Route path="/baz" render={() => <BazPage />} exact={true} />
      </IonRouterOutlet>
    </IonReactRouter>
  );
}
export default Example;
