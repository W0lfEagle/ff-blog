import React from "react";
import { Link } from "gatsby";

export const FooterTemplate = class extends React.Component {
  render() {
    // const { socialLinks } = this.props.data;
    // console.log(this.props.data);
    return (
      <footer className="footer has-text-primary">
        <div className="content has-text-centered has-text-primary">
          <div className="container has-text-primary">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Felicity Forsyth
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 is-offset-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link
                        className="navbar-item has-text-right"
                        to="/contact"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

const Footer = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <FooterTemplate data={data} />;
};

export default Footer;
