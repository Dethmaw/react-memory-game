import { Route, Switch } from "react-router-dom";

import Four from "./pages/Four";
import Eight from "./pages/Eight";
import Sixteen from "./pages/Sixteen";

import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Four />
        </Route>
        <Route path="/8x8">
          <Eight />
        </Route>
        <Route path="/16x16">
          <Sixteen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
