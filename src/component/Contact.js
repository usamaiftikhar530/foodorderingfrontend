import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

function Contact() {
  const url = 'https://foodorderingbackend.adaptable.app';
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    callContactPage();
  }, []);

  const callContactPage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const ContactSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = userData;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await res.json();
    if (!data) {
      console.log("Contact Form Data Not Sent");
    } else {
      window.alert("Message Sent");
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <>
      <Header />

      <div className="wrapper">
        <div className="registration_form">
          {/* <!– Title –> */}
          <div className="title">Contact Us</div>
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
                    value={userData.name}
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
                  value={userData.email}
                  onChange={handleInputs}
                />
              </div>
              {/* <!– Text Area input Place –> */}
              <div className="input_wrap">
                <label htmlFor="message">Message</label>
                <textarea
                  rows="4"
                  cols="45"
                  id="message"
                  name="message"
                  value={userData.message}
                  onChange={handleInputs}
                />
              </div>

              {/* <!– Submit button –> */}
              <div className="input_wrap">
                <input
                  type="submit"
                  value="Submit"
                  className="submit_btn"
                  onClick={ContactSubmit}
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

export default Contact;
