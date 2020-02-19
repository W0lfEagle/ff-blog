import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const AboutPageTemplate = ({
  title1,
  title2,
  content,
  myJourney,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-info">
                  {title1}
                  <br />
                  {title2}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
            <div className="column is-6">
              <figure className="image image is-5by4">
                <img src="https://bulma.io/images/placeholders/256x256.png"></img>
              </figure>
              <div className="column is-10 is-offset-1">
                <div className="card contact-card">
                  <div className="card-content has-text-centered">
                    <h2 className="is-size-4 has-text-centered has-text-primary">
                      Start your journey with a free coaching session.
                    </h2>
                  </div>
                  <div className="card-content">
                    <button className="button is-medium is-fullwidth is-primary">
                      Start your journey
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <figure className="image image is-5by4">
                <img src="https://bulma.io/images/placeholders/256x256.png"></img>
              </figure>
            </div>
            <div className="column is-6">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-info">
                {/* {title} */}
                {myJourney.heading}
              </h2>
              {/* <PageContent className="content" content={content} /> */}
              <div className="content">
                <ul>
                  {myJourney.steps.map(step => (
                    <li key={step.step}>{step.step}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  content: PropTypes.string,
  myJourney: PropTypes.shape({
    heading: PropTypes.string,
    steps: PropTypes.arrayOf(PropTypes.shape({ step: PropTypes.string }))
  }),
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout footerData={data.footerData} navbarData={data.navbarData}>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title1={post.frontmatter.title1}
        title2={post.frontmatter.title2}
        content={post.html}
        myJourney={post.frontmatter.myJourney}
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
        title1
        title2
        myJourney {
          heading
          steps {
            step
          }
        }
      }
    }
  }
`;
