import { useNavigate } from "react-router-dom";
import "./register.scss";
import { useContext, useState,useEffect } from "react";
import { AuthContext } from "../../Context/authContext";
import ReactGA from 'react-ga4'
export const RegisterPage = () => {
  const {login} = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  useEffect(()=>{
    ReactGA.send(window.location.pathname);
  },[])
  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !password ||!email) {
      setError("Please enter a username and password");
      return;
    }
    const registrationTime = new Date().toLocaleString(); // Get the current date and time
    ReactGA.event({
      category: 'User Register',
      action: 'Register Success',
      label: `Username: ${username}, Registration Time: ${registrationTime}`,
    });
    login({ id:1, name:username});
    navigate("/");
  };
  const navigate = useNavigate();
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Tola Social.</h1>
          <p>
            Join us now! Create an account and unlock endless possibilities.
            Your privacy is our priority. Let's embark on a journey together!
          </p>
          <span>Do you have an account?</span>

          <button onClick={() => navigate('/login')}>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
          <input type="text" placeholder="username  eg. Tola Lemma" 
             value={username}
            onChange={(e) => setUsername(e.target.value)}  required/>
            <input type="email" placeholder="Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}  required/>
            <input type="password" placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} required/>
            {error && <div className="error" style={{color:"red"}}>{error}</div>}
            <button onClick={handleRegister}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
