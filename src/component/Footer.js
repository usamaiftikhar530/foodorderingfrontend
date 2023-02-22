import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footerSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 footerBox">
              <div className="content">
                <h3>Contact Us</h3>
                <p>Location</p>
                <p>Phone Number</p>
                <p>usamaiftikhar530@gmail.com</p>
              </div>
            </div>
            <div className="col-lg-4 footerBox">
              <div className="content">
                <h1>Food Order</h1>
                <p>
                  Necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with
                </p>
                <p>© 2023 All Rights Reserved By Usama</p>
              </div>
            </div>
            <div className="col-lg-3 footerBox">
              <div className="content">
                <h3>Pages</h3>
                <ul>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to="/signin">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">Registration</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
