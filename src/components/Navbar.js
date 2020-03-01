import React from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
import logo from "../img/ff-logo.svg";

export const NavbarTemplate = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar has-background-grey-light"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img
                src={logo}
                alt="Felicity Forsyth Change and Transition Coach"
                // style={{ width: "288px", height: "200px" }}
                // width="288"
                // height="auto"
              />
            </Link>
            {/* Hamburger menu */}

            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              {/* {this.props.data.menuItems.map(menuItem => ( */}
              {[
                { linkURL: "/about/", label: "About Me" },
                { linkURL: "/coaching/", label: "Coaching" },
                { linkURL: "/kind-words/", label: "Kind Words" }
              ].map(menuItem => (
                <Link
                  className="navbar-item is-family-secondary"
                  to={menuItem.linkURL}
                >
                  {menuItem.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

const Navbar = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <NavbarTemplate data={data} />;
};

export default Navbar;
