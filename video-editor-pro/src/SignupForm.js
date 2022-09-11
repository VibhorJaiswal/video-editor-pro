import styles from './css/loginPage.module.css'

function SignupFrom(props)
{
  const {handleStatusChange, handlePassword, handleUsername} = props.methods;
  const {handleSignup} = props;
    return (
        <>
        <div className={styles.fieldDiv}>
          <input placeholder="Username" className={styles.input} onChange={handleUsername}></input>
          <input placeholder="Password" className={styles.input} onChange={handlePassword}></input>
          <button className={styles.submit} onClick={handleSignup}>Signup</button>
          <p onClick={handleStatusChange}>Already have an account? Login</p>
        </div>
      </>
    )
}

export default SignupFrom;