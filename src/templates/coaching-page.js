import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const CoachingPageTemplate = ({
  headingAndContent,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;
  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <div className="section">
              {headingAndContent.map(hc => (
                <div className="content" key={hc.heading}>
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-info">
                    {hc.heading}
                  </h2>
                  {hc.content.map(c => (
                    <p key={c.paragraph}>{c.paragraph}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="column is-6">
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
  );
};

CoachingPageTemplate.propTypes = {
  headingAndContent: PropTypes.array,
  contentComponent: PropTypes.func
};

const CoachingPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout footerData={data.footerData} navbarData={data.navbarData}>
      <CoachingPageTemplate
        contentComponent={HTMLContent}
        headingAndContent={post.frontmatter.heading_and_content}
      />
    </Layout>
  );
};

CoachingPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default CoachingPage;

export const cachingPageQuery = graphql`
  query CoachingPage {
    ...LayoutFragment
    markdownRemark(frontmatter: { templateKey: { eq: "coaching-page" } }) {
      frontmatter {
        heading_and_content {
          heading
          content {
            paragraph
          }
        }
      }
    }
  }
`;
