import styles from './css/loginPage.module.css'

function SignupFrom()
{
    return (
        <>
        <div className={styles.fieldDiv}>
          <input placeholder="Username" className={styles.input}></input>
          <input placeholder="Password" className={styles.input}></input>
          <button className={styles.submit}>Submit</button>
        </div>
      </>
    )
}

export default SignupFrom;