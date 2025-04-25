import React from "react";

function Login() {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    remberme: false,
  });
  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const Submit = (event) => {
    event.preventDefault();
    console.log("Submitted", data);
  };
  return (
    <div className="container">
      <h1>WELCOME BACK</h1>
      <h3>Welcome back! Please enter your details.</h3>
      <div className="left">
        <form onSubmit={Submit} className="form">
          <div>
            <label>Email</label>
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="**********"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div className="rememberme">
            <div className="checkremember">
              <input
                type="checkbox"
                name="rememberme"
                value={data.remberme}
                onChange={handleChange}
              />
              <label id="remember">Remember me?</label>
            </div>
            <div className="forgot">
              <a href="#" style={{ textDecoration: "none", color: "#181818" }}>
                Forgot password
              </a>
            </div>
          </div>
          <button type="submit" onClick={Submit} className="signin">
            Sign in
          </button>
          <button className="google">
            <img className="icon" src="/public/google.png" alt="Google icon" />
            Sign in with Google
          </button>
          <h3 className="noaccount">
            Don't have an account?{" "}
            <a href="#" style={{ color: "#EA454C" }}>
              Sign up for free
            </a>
          </h3>
        </form>
      </div>
    </div>
  );
}

export default Login;
