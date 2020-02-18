import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-info">
                  {/* {title} */}
                  Hello!
                  <br />
                  I'm Felicity.
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-info">
                  {/* {title} */}
                  Some of my stops along the way...
                </h2>
                {/* <PageContent className="content" content={content} /> */}
                <div className="content">
                  <ul>
                    <li>18 years deep in the 💛 of Texas.</li>
                    <li>
                      4 years studying International Development in Washington,
                      DC (BA, GWU).
                    </li>
                    <li>
                      A year studying Medical Anthropology and Sociology in
                      Amsterdam (MSc, UvA).
                    </li>
                    <li>
                      10 years wandering the world as a teacher and relocation
                      coach in Thailand, Taiwan, The Netherlands, Senegal,
                      Ecuador, Colombia and Costa Rica.
                    </li>
                    <li>3 years working in corporate relocation in London.</li>
                    <li>
                      A year studying transformational coaching at Animas Centre
                      in London.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout footerData={data.footerData} navbarData={data.navbarData}>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    ...LayoutFragment
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
