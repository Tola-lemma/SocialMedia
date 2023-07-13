import { useNavigate } from "react-router-dom";
import "./register.scss";
export const RegisterPage = () => {
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
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
