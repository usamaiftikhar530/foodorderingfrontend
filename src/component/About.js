import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function About() {
  const url = 'https://foodorderingbackend.adaptable.app';
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    callAboutPage();
  }, []);

  const callAboutPage = async () => {
    try {
      const res = await fetch("/api/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/signin");
    }
  };

  return (
    <>
      <Header />

      <section className="about-us">
        <div className="about">
          <img src="girl.png" className="pic" />
          <div className="text">
            <h2>About Me</h2>
            <h5>
              {userData.name} & <span>Web Developer</span>
            </h5>
            <p>
              My email is <span>{userData.email}</span>, consectetur adipisicing
              elit. Expedita natus ad sed harum itaque ullam enim quas, veniam
              accusantium, quia animi id eos adipisci iusto molestias asperiores
              explicabo cum vero atque amet corporis! Soluta illum facere
              consequuntur magni. Ullam dolorem repudiandae cumque voluptate
              consequatur consectetur, eos provident necessitatibus reiciendis
              corrupti!
            </p>
            <div className="data">
              <NavLink to="/logout" className="hire">
                Log Out
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
