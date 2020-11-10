import { Route, Switch } from "react-router-dom";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profiles/Profile";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profiles" component={Profile} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
