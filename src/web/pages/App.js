import * as React from "react";

import "../../assets/styles.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./home";
import Detail from "./detail";
import Catalogo from "./catalogo";
import Thankyou from "./thankyou";

export default function App() {
  return (
    <Router>
      <>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/catalogo" component={Catalogo} />
          <Route path="/detail" component={Detail} />
          <Route path="/thankyou" component={Thankyou} />
          <Route path="/" component={Home} />
        </Switch>
      </>
    </Router>
  );
}
