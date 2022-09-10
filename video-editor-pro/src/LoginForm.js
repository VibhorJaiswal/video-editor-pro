import styles from "./css/loginPage.module.css";

function LoginForm() {
    return (
        <>
        <div className={styles.fieldDiv}>
          <input placeholder="Username" className={styles.input}></input>
          <input placeholder="Password" className={styles.input}></input>
          <button className={styles.submit}>Submit</button>
          <p>Don't have an account? Signup</p>
        </div>
      </>
    )
}

export default LoginForm;
