import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
import Header from "./components/nav/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserContext from "./context/userContext";
import Navbar from "./components/nav/Navbar";
import constants from "./constants/constants";
import adminapplicationpage from "./pages/AdminApplicationPage";
import AdminSignup from "./pages/AdminSignup";
import Dashboard from "./pages/Dashboard";
import Application from "./pages/Application";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const tokenRes = await Axios.post(
        constants.backend_url + "/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      console.log(tokenRes.data);
      if (tokenRes.data) {
        const userRes = await Axios.get(constants.backend_url + "/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/adminsignup" component={AdminSignup} />
            <Route
              path="/adminapplicationpage"
              component={adminapplicationpage}
            />
            <Route path="/register" component={Register} />
            <Route path="/apply" component={Application} />
            <Route path="/" component={Login} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
