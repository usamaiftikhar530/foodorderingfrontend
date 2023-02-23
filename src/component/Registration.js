import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { json, useNavigate } from "react-router-dom";

function Registration() {
  const url = 'https://foodorderingbackend.adaptable.app';
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = user;

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        cpassword,
      }),
    });

    // const data = await res.json();
    if (res.status === 422) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");

      navigate("/signin");
    }
  };

  return (
    <>
      <Header />

      <div className="wrapper">
        <div className="registration_form">
          {/* <!– Title –> */}
          <div className="title">Registration Form</div>
          {/* <!– Form –> */}
          <form method="POST">
            <div className="form_wrap">
              <div className="input_grp">
                {/* <!– Frist name input Place –> */}
                <div className="input_wrap">
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="name"
                    value={user.name}
                    onChange={handleInputs}
                  />
                </div>
              </div>
              {/* <!– Email Id input Place –> */}
              <div className="input_wrap">
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputs}
                />
              </div>
              {/* <!– Password input Place –> */}
              <div className="input_wrap">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                />
              </div>
              {/* <!– Confirm Password input Place –> */}
              <div className="input_wrap">
                <label htmlFor="cpassword">Confirm Password</label>
                <input
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  value={user.cpassword}
                  onChange={handleInputs}
                />
              </div>
              {/* <!– Submit button –> */}
              <div className="input_wrap">
                <input
                  type="submit"
                  value="Register Now"
                  className="submit_btn"
                  onClick={PostData}
                />
              </div>
              <h4>OR</h4>
              <div className="input_wrap">
                <input
                  type="submit"
                  value="Login Now"
                  className="submit_btn"
                  onClick={() => navigate("/signin")}
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

export default Registration;
