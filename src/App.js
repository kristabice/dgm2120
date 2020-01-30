import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./Components/Nav";
import Syllabus from "./Scenes/Syllabus";
import One from "./Scenes/UnitOne";
import Two from "./Scenes/UnitTwo";
import Three from "./Scenes/UnitThree";
import Four from "./Scenes/UnitFour";
import Five from "./Scenes/UnitFive";
import Six from "./Scenes/UnitSix";
import Seven from "./Scenes/UnitSeven";
import Eight from "./Scenes/UnitEight";
import Nine from "./Scenes/UnitNine";
import Final from "./Scenes/Final";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/syllabus" component={Syllabus} />
          <Route exact path="/unit-one" component={One} />
          <Route exact path="/unit-two" component={Two} />
          <Route exact path="/unit-three" component={Three} />
          <Route exact path="/unit-four" component={Four} />
          <Route exact path="/unit-five" component={Five} />
          <Route exact path="/unit-six" component={Six} />
          <Route exact path="/unit-seven" component={Seven} />
          <Route exact path="/unit-eight" component={Eight} />
          <Route exact path="/unit-nine" component={Nine} />
          <Route exact path="/final" component={Final} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
