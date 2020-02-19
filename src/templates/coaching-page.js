import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const CoachingPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-info">
                {/* {title} */}
                Coaching with me...
              </h2>
              <PageContent className="content" content={content} />
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-info">
                {/* {title} */}
                Let's talk...
              </h2>
              <PageContent className="content" content={content} />
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-info">
                {/* {title} */}
                The details...
              </h2>
              <PageContent className="content" content={content} />
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
                  <button class="button is-medium is-fullwidth is-primary">
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
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const CoachingPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout footerData={data.footerData} navbarData={data.navbarData}>
      <CoachingPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

CoachingPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default CoachingPage;

export const cachingPageQuery = graphql`
  query CoachingPage($id: String!) {
    ...LayoutFragment
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
