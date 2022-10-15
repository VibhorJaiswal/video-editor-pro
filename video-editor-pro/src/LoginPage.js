import LoginForm from "./LoginForm";
import SignupFrom from "./SignupForm.js";
import styles from "./css/loginPage.module.css";
// import Notification from "./Notification";
import { useState } from "react";

//for below component

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function LoginPage(props) {

  const [status, changestatus] = useState(true); //true for login
  const [username, changeusername] = useState("");
  const [password, changepassword] = useState("");
  const [showNotif, changeShowNotif] = useState(false);
  const [notifMsg, changNotifMsg] = useState("");
  const [notifType, changeNotifType] = useState("");

  const {handleCurrentPage} = props;

  // console.log(props);

  const handleShowNotif = () => {
    changeShowNotif(!showNotif);
  }

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

  const handleLogin = () => {
    const data = { username, password };

    // console.log(data);

    fetch("http://localhost:8080/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.message === 'registered')
        {
          console.log('registered');
          handleCurrentPage();
        }
        else if(data.message === 'not registered')
        {
          changNotifMsg("Username and password does not match.");
          changeNotifType("error");
          changeShowNotif(true);
        }
      })
      .catch((error) => {
        console.log("Custom ERROR:", error);
      });
  };

  const handleSignup = () => {


    const data = { username, password };

    // console.log(data);

    fetch("http://localhost:8080/signup", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {

        if(data.message === 'username taken')
        {
          changNotifMsg("This username is already taken.");
          changeNotifType("error");
          changeShowNotif(true);
        }
        else if(data.message === "done")
        {
          changNotifMsg("Registered!");        
          changeNotifType("success");
          changeShowNotif(true);  
        }
      })
      .catch((error) => {
        console.log("Custom ERROR:", error);
      });

  };

  const methods = { handlePassword, handleUsername, handleStatusChange };
  return (
    <div className={styles.loginPage}>
      <div className={styles.formdiv}>
        {showNotif && <Notification handleShowNotif={handleShowNotif} notifMsg={notifMsg} notifType={notifType}/>}
        {status && <LoginForm methods={methods} handleLogin={handleLogin} />}
        {!status && (
          <SignupFrom methods={methods} handleSignup={handleSignup} />
        )}
      </div>
    </div>
  );
}



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Notification(props) {
  const [open, setOpen] = React.useState(true);
  const {handleShowNotif, notifMsg, notifType} = props;

  console.log(notifMsg);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    handleShowNotif();
    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={notifType} sx={{ width: '100%' }}>
          {notifMsg}
        </Alert>
      </Snackbar>
    </Stack>
  );
}



export default LoginPage;
