import styles from "./css/loginPage.module.css";

function LoginForm(props) {
  const { handleStatusChange, handlePassword, handleUsername } =
    props.methods;

    const {handleLogin} = props

    // console.log(props);

  return (
    <>
      <div className={styles.fieldDiv}>
        <input
          placeholder="Username"
          className={styles.input}
          onChange={handleUsername}
        ></input>
        <input
          placeholder="Password"
          type="password"
          className={styles.input}
          onChange={handlePassword}
        ></input>
        <button className={styles.submit} onClick={handleLogin}>
          Login
        </button>
        <p onClick={handleStatusChange}>Don't have an account? Signup</p>
      </div>
    </>
  );
}

export default LoginForm;
