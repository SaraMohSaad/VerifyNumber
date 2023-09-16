import axios from 'axios';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
const Login = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordShown, setPasswordShown] = useState<boolean>(false);
    const [error,setError] = useState(null)
    var type = ''

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

    const getUsername = (event :React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const getPassword =  (event :React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const getType = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const user = {
            username: username,
            pass: password
        }
        try{
            await axios.post("http://localhost:9000/login", user, {withCredentials: false}).then(
                (res)=> {
                    type = res.data.type
                    localStorage.setItem('type', res.data.type)
                } 
            )
        }
        catch (error: any) {
            setError(error.response.data)
        }
    }
    const navigate = useNavigate();


    

    return(
            
        <div className='Login_bodySara'>
            <div className="login-box">
                <label className=' login_h1'>Phone Number Verifier</label>
                
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
                    <button className=' login_a'>Login</button>
                    {error && <label className=' required'>{error} </label>}
                    <label className=' signup'>Don't Have an account? </label>
                    <a className=' forgot_password'>Sign Up Instead</a>
                </form>
            </div>
        </div>
    )

}

export default Login