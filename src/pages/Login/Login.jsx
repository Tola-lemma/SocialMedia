import { useNavigate } from "react-router-dom";
import "./login.scss";
import { useContext, useState,useEffect } from "react";
import { AuthContext } from "../../Context/authContext";
import ReactGA from 'react-ga4'
export const Login = () => {
  const navigate = useNavigate();
  const {login} = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  useEffect(()=>{
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search, title: "Login Page" });
  },[])
  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter a username and password");
      return;
    }
    // Track user login
        ReactGA.event({
          category: 'User Login',
          action: 'Login success',
          label: `Username: ${username}`,
          // Include geolocation data
        });

    login({ id:1, name:username});
    navigate("/");
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World!</h1>
          <p>
            Welcome to our login page! Get ready to unlock endless
            possibilities. We prioritize your privacy and ensure a secure login
            experience. Join us and discover a world of personalized content and
            exciting features. started - log in and unlock endless
            possibilities!
          </p>
          <span>Don't you have an account?</span>
          <button onClick={()=>navigate('/register')}>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="username eg. Tola Lemma" 
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)} 
            />
            <input type="password" placeholder="password" 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
             {error && <div className="error" style={{color:"red"}}>{error}</div>}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
