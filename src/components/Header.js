import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      innerWidth: window.innerWidth,
      showNavLinks: false,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      if (this.state.innerWidth >= 600 && window.innerWidth < 600) {
        this.setState({ showNavLinks: false });
      }
      this.setState({
        innerWidth: window.innerWidth,
      });
    });
  }

  toggleNav = () => {
    this.setState({
      showNavLinks: !this.state.showNavLinks,
    });
  };

  handleNavLinks = () => {
    if (this.state.innerWidth >= 600) {
      return (
        <React.Fragment>
          <a href="#home">{links}</a>
        </React.Fragment>
      );
    } else if (this.state.innerWidth < 600 && this.state.showNavLinks) {
      return (
        <React.Fragment>
          <button onClick={this.toggleNav} className={theme} className="icon">
            <i className="fa fa-bars"></i>
          </button>
          <a href="#home">{links}</a>
        </React.Fragment>
      );
    } else {
      return (
        <button onClick={this.toggleNav} className={theme} className="icon">
          <i className="fa fa-bars"></i>
        </button>
      );
    }
  };

  render({ theme, logo }) {
    return (
      <div>
        <div className={theme} id="myNav">
          <div className="logo">
            <img src={logo} alt="logo" height="42" />
          </div>
          <div className="nav-links">{this.handleNavLinks()}</div>
        </div>
      </div>
    );
  }
}

export default Header;
