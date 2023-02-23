import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Login() {
  const url = 'https://foodorderingbackend.adaptable.app';
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (res.status === 400) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login Successfuly");
      navigate("/");
    }
  };

  return (
    <>
      <Header />

      <div className="wrapper">
        <div className="registration_form">
          {/* <!– Title –> */}
          <div className="title">Login Form</div>
          {/* <!– Form –> */}
          <form method="POST">
            <div className="form_wrap">
              {/* <!– Email Id input Place –> */}
              <div className="input_wrap">
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <!– Password input Place –> */}
              <div className="input_wrap">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* <!– Submit button –> */}
              <div className="input_wrap">
                <input
                  type="submit"
                  value="Login Now"
                  className="submit_btn"
                  onClick={LoginUser}
                />
              </div>
              <h4>OR</h4>
              <div className="input_wrap">
                <input
                  type="submit"
                  value="Register Now"
                  className="submit_btn"
                  onClick={() => navigate("/register")}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
