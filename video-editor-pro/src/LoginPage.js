import LoginForm from "./LoginForm";
import SignupFrom from "./SignupForm.js";
import styles from "./css/loginPage.module.css";
import { useState } from "react";

function LoginPage() {
  const [status, changestatus] = useState(true); //true for login

  const [username, changeusername] = useState("");
  const [password, changepassword] = useState("");

  const handleUsername = (e) => {
    // console.log(e.target.value);
    changeusername(e.target.value);
  };

  const handlePassword = (e) => {
    // console.log(e.target.value);
    changepassword(e.target.value);
  };

  const handleStatusChange = () => {
    changestatus(!status);
  };

  const handleLogin = () => {};

  const handleSignup = () => {

    const data = { username, password };

    // console.log(data);

    fetch('http://localhost:8080/')
    .then((res) => res.json())
    .then((d) => console.log(d));

    // fetch("http://localhost:8080/login", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //     'Accept': 'application/json'
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((d) => {console.log(d)})
      // .catch((error) => {
      //   console.log("Custom ERROR:", error);
      // });
  
};

  const methods = { handlePassword, handleUsername, handleStatusChange };
  return (
    <div className={styles.loginPage}>
      <div className={styles.formdiv}>
        {status && <LoginForm methods={methods} />}
        {!status && (
          <SignupFrom methods={methods} handleSignup={handleSignup} />
        )}
      </div>
    </div>
  );
}

export default LoginPage;
