import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const CoachingPageTemplate = ({
  title1,
  content1,
  title2,
  content2,
  title3,
  content3,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-info">
                {title1}
              </h2>
              <PageContent className="content" content={content1} />
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-info">
                {title2}
              </h2>
              <PageContent className="content" content={content2} />
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-info">
                {title3}
              </h2>
              <PageContent className="content" content={content3} />
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
  title1: PropTypes.string.isRequired,
  content1: PropTypes.string,
  title2: PropTypes.string.isRequired,
  content2: PropTypes.string,
  title3: PropTypes.string.isRequired,
  content3: PropTypes.string,
  contentComponent: PropTypes.func
};

const CoachingPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout footerData={data.footerData} navbarData={data.navbarData}>
      <CoachingPageTemplate
        contentComponent={HTMLContent}
        title1={post.frontmatter.title1}
        content1={post.frontmatter.body1}
        title2={post.frontmatter.title2}
        content2={post.frontmatter.body2}
        title3={post.frontmatter.title3}
        content3={post.frontmatter.body3}
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
        title1
        title2
        title3
        body1
        body2
        body3
      }
    }
  }
`;
