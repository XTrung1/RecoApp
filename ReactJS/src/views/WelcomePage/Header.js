import React from "react";
import "../../assets/styles/WelcomePage/Header.scss";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <div className="navbar-container">
            <div className="navbar-left">
              <div className="logo"></div>
            </div>
            <div className="navbar-right">
              <div className="navbar-language">
                <i class="fi fi-sr-globe"></i>
                <select className="change-language">
                  <option value="vi">Tiếng Việt</option>
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="navbar-log">
                <button className="btn btn-sign-in">Sign In</button>
                <button className="btn btn-sign-up">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
