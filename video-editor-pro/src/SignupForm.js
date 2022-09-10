import styles from './css/loginPage.module.css'

function SignupFrom(props)
{

    const {handleStatusChange} = props;

    return (
        <>
        <div className={styles.fieldDiv}>
          <input placeholder="Username" className={styles.input}></input>
          <input placeholder="Password" className={styles.input}></input>
          <button className={styles.submit}>Signup</button>
          <p onClick={handleStatusChange}>Already have an account? Login</p>
        </div>
      </>
    )
}

export default SignupFrom;