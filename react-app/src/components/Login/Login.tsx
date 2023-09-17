import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../redux/ReduxStore';
import './Login.css';
//import { useTranslation } from 'react-i18next';

const Login = () => {
   // const { t } = useTranslation();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordShown, setPasswordShown] = useState<boolean>(false);
    const [error,setError] = useState(null);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

    const getUsername = (event :React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const getPassword =  (event :React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const loginHandler = () => {
      dispatch(authActions.login());
    };
  
    

    return(
            
        <div className='Login_body'>
            <div className="login-box">
                <label className=' login_h1'>Verify Phone Number</label>
                
                <label className=' login_h2'>Sign in to your account</label>
                <br/>
                <form className=' login_form' onSubmit={()=>{navigate("/Home")}}>
                    <div className="user-box">
                    <input className=" login_input" type="text" onChange={getUsername} value={username} required={true}></input>
                    <label className=' login_label'>Username</label>
                    </div>
                    <br/>
                    <div className="user-box">
                    <input className=" login_input" type={passwordShown ? "text" : "password"} onChange={getPassword} value={password} required={true}></input>
                    <i className={passwordShown ? "fa fa-eye-slash" : "fa fa-eye"} onClick={togglePassword}></i>
                    <label className=' login_label'>Password</label>
                    </div>
                    <a className=' forgot_password'>Forgot Your Password?</a>
                    <button className=' login_a' onClick={loginHandler}>Login</button>
                    {error && <label className=' required'>{error} </label>}
                    <label className=' signup'>Don't Have an account? </label>
                    <a className=' forgot_password'>Sign Up Instead</a>
                </form>
            </div>
        </div>
    )

}

export default Login