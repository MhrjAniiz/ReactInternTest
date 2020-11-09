import { Route, Switch } from "react-router-dom";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profiles/Profile";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profiles" component={Profile} />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
