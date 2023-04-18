import React, { useState } from "react";

import { User } from "./models/User";

import Navigation from "./components/Navigation/Navigation";

import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Register from "./pages/Register/Register";

import "./App.css";

function App() {
  const [route, setRoute] = useState("signin");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const [user, setUser] = useState<User>({
    id: "",
    name: "",
    email: "",
    entries: 0,
  });

  const onRouteChange = (route: string) => {
    if (route === "signout") {
      setIsSignedIn(false);
    } else if (route === "home") {
      setIsSignedIn(true);
    }
    setRoute(route);
  };

  const loadUser = (user: User) => {
    setUser(user);
  };
  return (
    <div className="App">
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
      {route === "home" ? (
        <Home user={user} loadUser={loadUser} />
      ) : route === "signin" ? (
        <Signin loadUser={loadUser} onRouteChange={onRouteChange} />
      ) : (
        <Register loadUser={loadUser} onRouteChange={onRouteChange} />
      )}
    </div>
  );
}

export default App;
