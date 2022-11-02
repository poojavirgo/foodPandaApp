import React, { useEffect, useContext, useState, useRef } from "react";
import { itemContext } from "../../store/context";
import { Link, useHistory } from "react-router-dom";
import classes from "./Login.module.css";

var store = require("store");

const Login = () => {
  const iL = useContext(itemContext);
  const history = useHistory();
  const loggedin = store.get("loggedIn");
  const { loggedIn } = iL.state ?? loggedin ?? false;
  const [isSignIn, setSignIn] = useState(false);
  const [userLogin, setUserLogin] = useState({ mail: "", psd: "" });
  const orderedItems = store.get("orderedItems");
  const emailInputRef = useRef();
  const passInputRef = useRef();

  let flag = false;

  useEffect(() => {
    //navigate to specific page after login

    if (isSignIn === true) {
      window.location.replace("/");
    } else if (isSignIn === true && orderedItems && orderedItems.length) {
      //got to checkout page
      //flag=true;
      setTimeout(() => {
        window.location.replace("/checkout");
      }, 1000);
    }
  }, [history, orderedItems]);

  const onLoginRequest = async (loginData) => {
    console.log("Login!!");
    flag = true;

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBFDRS3qMecD0q0D-7hohPURiooqwJOifU",
        {
          method: "POST",
          headers: {
            "Content-type": "/application.json",
          },
          body: JSON.stringify({
            email: loginData.email,
            password: loginData.pass,
            returnSecureToken: true,
          }),
        }
      );
      const data = await response.json();
      setSignIn(true);
      store.set("loggedIn", true);
      window.location.replace("/");
      if (!response.ok) {
        let errorMessage = "Please enter valid credentials";
        if (data?.error?.message) {
          errorMessage = data.error.message;
        }
        setSignIn(false);

        alert(errorMessage);
      }
    } catch (error) {
      setSignIn(false);
      console.log(error.message);
    }
    flag = false;
  };

  const onLoginHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passInputRef.current.value;

    const loginData = {
      email: enteredEmail,
      pass: enteredPassword,
    };

    onLoginRequest(loginData);
  };

  const onRegisterHandler = () => {
    window.location.replace("/register");
  };

  return (
    <>
      {flag === true && (
        <h4 className="text-success text-center p-1">Redirecting to...</h4>
      )}
      <form className={`${classes.auth} form1`} onSubmit={onLoginHandler}>
        <h2>Login</h2>
        <br />
        <div className={`${classes.control} form-group d-flex flex-column g-2`}>
          <label htmlFor="email" className="form-label m-2 h5">
            Email
          </label>
          <input
            type="email"
            name="mail"
            className="form-control-lg"
            ref={emailInputRef}
            placeholder="Email"
            required
          />
        </div>
        <div className={`${classes.control} form-group d-flex flex-column g-2`}>
          <label htmlFor="password" className="form-label m-2 h5">
            Password
          </label>
          <input
            type="password"
            name="psd"
            className="form-control-lg"
            ref={passInputRef}
            placeholder="Password"
            required
          />
        </div>
        <button className="btn btn-primary btn-lg m-3 ms-0">Sign in</button>
        <hr />
        <span>
          Don't have an account? |{" "}
          <Link to="/register">
            <span onClick={onRegisterHandler}>Register Here</span>
          </Link>
        </span>
      </form>
    </>
  );
};

export default Login;
