import LoginForm from './LoginForm';
import SignupFrom from './SignupForm.js';
import styles from './css/loginPage.module.css'
import { useState } from 'react';

function LoginPage()
{

    const [status, changestatus] = useState(true); //true for login

    const handleStatusChange = () =>
    {
        changestatus(!status);
    }

    return (
        <div className={styles.loginPage}>
            <div className={styles.formdiv}>
            {status && <LoginForm handleStatusChange={handleStatusChange}/>}
            {!status && <SignupFrom handleStatusChange={handleStatusChange}/>}
            </div>

        </div>

    )
}

export default LoginPage;