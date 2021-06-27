import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../css/style.css";
import Axios from "axios";
import UserContext from "../context/userContext";
import ErrorNotice from "../components/misc/ErrorNotice";
import Cal from "../images/cal.png";
import constants from "../constants/constants";
import Sidebar from "../components/Sidebar/sidebar";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState("admin");
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  //submit admin data
  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { email, password, passwordCheck, displayName, role };
      await Axios.post(constants.backend_url + "/users/register", newUser);
      history.push("/adminapplicationpage");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  //chech user loggedin 
  useEffect(() => {
    if (localStorage.getItem("auth-token") == "") {
      history.push("/");
    }
  }, [])


  return (
    <div>
      <Sidebar />
      <div
        class="  p-3 mb-2  text-white "
      >
        <div
          class="container-lg  shadow p-3 mb-5  text-dark  "
          style={{ marginTop: "5%", backgroundColor: "white" }}
        >
          <div class="row row-cols-2">
            <div class="col">
              <img src={Cal} class="img-thumbnail" alt="..."></img>
            </div>
            <div class="col">
              <div
                class="container-sm   p-3 mb-5 bg-body rounded bg-light text-dark "
                style={{ marginTop: "0%", height: "97.6%" }}
              >
                <div style={{ marginTop: "7%" }}>
                  <div class="mx-auto">
                    <h2>Admin Sign Up</h2>
                  </div>
                  <p>Please Signup Before login to your Account</p>
                  {error && (
                    <ErrorNotice
                      message={error}
                      clearError={() => setError(undefined)}
                    />
                  )}
                  <div>
                    <form onSubmit={submit}>
                      <div className="mb-2">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="register-email"
                          aria-describedby="emailHelp"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-2">
                        <label className="form-label">User Name</label>
                        <input
                          type="text"
                          id="register-display-name"
                          className="form-control"
                          onChange={(e) => setDisplayName(e.target.value)}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="register-password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Verify Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="Verify password"
                          onChange={(e) => setPasswordCheck(e.target.value)}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-dark ml-150 px-5"
                        value="Register"
                      >
                        Sign Up
                      </button>
                    </form>
                  </div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}