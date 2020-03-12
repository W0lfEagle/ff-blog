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
              {/* <div className="column is-4 is-offset-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item has-text-right"> */}
              {/* <a href="https://www.iubenda.com/privacy-policy/78639762" class="iubenda-white iubenda-embed" title="Privacy Policy ">Privacy Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false); }else if(w.attachEvent){w.attachEvent("onload", loader); }else{w.onload = loader; }})(window, document);</script> */}
              {/* <a href="https://www.iubenda.com/terms-and-conditions/78639762" class="iubenda-white iubenda-embed" title="Terms and Conditions ">Terms and Conditions</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false); }else if(w.attachEvent){w.attachEvent("onload", loader); }else{w.onload = loader; }})(window, document);</script> */}
              {/* Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </section>
              </div> */}
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
