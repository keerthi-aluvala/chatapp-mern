import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user===null || user.username===undefined ? <Register /> : <Home />}
          {/* <Login /> */}
        </Route>
        <Route path="/login">
          <Login/> 
        </Route>
        <Route path="/register">
          {user===null || user.username===undefined ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
        <Route path="/messenger">
          <Messenger />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;