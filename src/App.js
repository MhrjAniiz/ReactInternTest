import { Route, Switch } from "react-router-dom";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profiles/Profile";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import UpdateForm from "./components/UpdateForm/UpdateForm";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profiles" component={Profile} />
        <Route exact path="/edit/:id" component={UpdateForm} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
