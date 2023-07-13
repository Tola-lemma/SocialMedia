import "./login.scss";

export const Login = () => {
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
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
