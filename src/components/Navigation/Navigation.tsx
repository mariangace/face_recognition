import React from "react";
import Logo from "../Logo/Logo";

type NavigationProps = {
  onRouteChange: (route: string) => void;
  isSignedIn: boolean;
};
function Navigation({ onRouteChange, isSignedIn }: NavigationProps) {
  return (
    <nav className="flex justify-between">
      <Logo />
      {isSignedIn ? (
        <div>
          <p
            onClick={() => onRouteChange("signin")}
            className="f3 link dim black underline pa3 pointer"
          >
            Sign out
          </p>
        </div>
      ) : (
        <div className="flex">
          <p
            onClick={() => onRouteChange("signin")}
            className="f3 link dim black underline pa3 pointer"
          >
            Sign in
          </p>
          <p
            onClick={() => onRouteChange("register")}
            className="f3 link dim black underline pa3 pointer"
          >
            Register
          </p>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
