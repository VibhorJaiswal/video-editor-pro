import LoginForm from './LoginForm';
import SignupFrom from './SignupForm.js';
import styles from './css/loginPage.module.css'

function LoginPage()
{
    return (
        <div className={styles.loginPage}>
            <div className={styles.formdiv}>
            <LoginForm />
            {/* <SignupFrom /> */}
            </div>

        </div>

    )
}

export default LoginPage;