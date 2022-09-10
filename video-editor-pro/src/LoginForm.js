import styles from "./css/loginPage.module.css";

function LoginForm(props) {

    const {handleStatusChange} = props

    return (
        <>
        <div className={styles.fieldDiv}>
          <input placeholder="Username" className={styles.input}></input>
          <input placeholder="Password" type='password' className={styles.input}></input>
          <button className={styles.submit}>Login</button>
          <p onClick={handleStatusChange}>Don't have an account? Signup</p>
        </div>
      </>
    )
}

export default LoginForm;
