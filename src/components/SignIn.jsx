import { useState } from "react";
import styles from "../Css/SignIn.module.css";
import { format } from "date-fns";
import "../Css/Icons.css";

export default function SignIn({ handleAuthentication }) {
  // state (etat, données)

  const [user, setUser] = useState({ email: "", password: "" });
  const [isSignIn, setIsSignIn] = useState(true); // Par défaut, le formulaire est pour la connexion

  // Récupération des utilisateurs depuis le localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const projects = JSON.parse(localStorage.getItem("projects")) || []; // Chargez les projects depuis le localStorage

  const isAdmin = (email) => {
    const adminEmails = ["admin1@example.com", "admin2@example.com"]; // Liste des adresses e-mail des administrateurs
    return adminEmails.includes(email);
  };

  // Comportements

  const handlePassword = (e) => {
    setUser({ ...user, password: e.target.value }); // Utilisation de la fonction de mise à jour de l'état
  };

  const handleEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const setProjectData = () => {
    const formattedDate = format(new Date(), "dd/MM/yy");
    const newProject = {
      id: projects.length > 0 ? projects[projects.length - 1].id + 1 : 1,
      name: document.getElementById("projectNameInput").value,
      userEmail: user.email,
      date: formattedDate,
    };
    // Stockez les données dans le localStorage
    const updatedProjects = [...projects, newProject];
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // pour que ca ne recharge pas
    if (isSignIn) {
      // Vérification si l'email existe dans la liste des utilisateurs
      const foundUser = users.find((u) => u.email === user.email);
      if (foundUser) {
        if (foundUser.password === user.password) {
          alert("Connexion réussie !");
          const userType = isAdmin(foundUser.email) ? "admin" : "user"; // Déterminer le type d'utilisateur
          handleAuthentication(true, userType, user.email); // Passer le type d'utilisateur à la fonction de gestion de l'authentification
        } else {
          alert("Mot de passe incorrect !");
        }
      } else {
        alert("L'adresse mail est inconnue à notre base de données");
      }
      console.log("Login with " + user.email);
    } else {
      console.log("Sign Up with " + user.email);
      // Ajouter le nouvel utilisateur à la liste
      const updatedUsers = [...users, user];
      // Sauvegarder la liste mise à jour dans le local storage
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      handleAuthentication(true);
    }
  };

  // Affichage (render)

  return (
    <div className={styles.backSignIn}>
      <div className={styles.signIn}>
        <h1 style={{ color: "#454167" }}>Sign {isSignIn ? "In" : "Up"}</h1>
        <p style={{ color: "#454167" }}>
          {isSignIn
            ? "Enter your email & password to sign in"
            : "Create your account"}
        </p>
        <form onSubmit={handleSubmit}>
          <div className={styles.email}>
            {" "}
            <i className="bi bi-person"></i>
            <input
              id="emailInput"
              type="email"
              placeholder="exemple@gmail.com"
              onChange={handleEmail}
            />
          </div>
          {isSignIn ? (
            ""
          ) : (
            <div className={styles.project}>
              {" "}
              <i className="bi bi-layers"></i>
              <input
                id="projectNameInput"
                type="text"
                placeholder="Project Name"
                onChange={setProjectData}
              />
            </div>
          )}
          <div className={styles.password}>
            <i className="bi bi-file-lock2"></i>
            <input
              type="password"
              id="passwordInput"
              placeholder="MyPassword"
              onChange={handlePassword}
            />
          </div>

          <div className={styles.signInFunctions}>
            <div className={styles.remember}>
              <input type="checkbox" className={styles.rememberchkBox} />
              &nbsp;<p style={{ color: "#454167" }}>Remember</p>
            </div>
            <p style={{ color: "#454167" }} className={styles.forgotPassword}>
              Forgot Password?
            </p>
          </div>

          <button type="submit" className={styles.loginBtn}>
            Login
          </button>

          <button
            type="button"
            className={styles.loginBtn}
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn ? "Sign Up" : "Back"}
          </button>
        </form>
      </div>
    </div>
  );
}
