import React, { Component } from "react";
import styles from "../Css/SignIn.module.css";
import "../Css/Icons.css";

class SignIn extends React.Component {
  render() {
    return (
      <div className={styles.backSignIn}>
        <img
          src="../imgs/LogoTsohar.png"
          alt="Tsohar Logo"
          className={styles.logo}
        />
        <div className={styles.signIn}>
          <h1>Sign In</h1>
          <p>Enter your email & password to sign in</p>
          <div className={styles.email}>
            {" "}
            <i className="bi bi-person"></i>
            <input id="emailInput" placeholder="exemple@gmail.com" />
          </div>
          <div className={styles.password}>
            <i className="bi bi-file-lock2"></i>
            <input
              type="password"
              id="passwordInput"
              placeholder="MyPassword"
            />
          </div>
          <div className={styles.signInFunctions}>
            <div className={styles.remember}>
              <input type="checkbox" className={styles.rememberchkBox} />
              &nbsp;<p>Remember</p>
            </div>
            <p className={styles.forgotPassword}>Forgot Password?</p>
          </div>
          <button className={styles.loginBtn}>Login</button>
        </div>
      </div>
    );
  }
}
export default SignIn;
