import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const CoachingPageTemplate = ({
  headingAndContent,
  packages,
  coverImage,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
      {/* <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!coverImage.childImageSharp
              ? coverImage.childImageSharp.fluid.src
              : coverImage
          })`
        }}
      ></div> */}
      <div className="section">
        <div className="container">
          <div className="columns is-vcentered">
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
              <div className="section">
                <figure className="is-square">
                  <PreviewCompatibleImage imageInfo={{ image: coverImage }} />
                </figure>
              </div>
              <div className="column is-10 is-offset-1">
                <div className="card contact-card">
                  <div className="card-content has-text-centered">
                    <h2 className="is-size-4 has-text-centered">
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

        <div className="container">
          <div className="section">
            {packages.map(pack => (
              <div className="columns" key={pack.heading}>
                <div className="column is-2">
                  <PreviewCompatibleImage imageInfo={{ image: pack.image }} />
                </div>
                <div className="column is-5">
                  <div className="content">
                    <h3 className="has-text-danger is-size-5">
                      {pack.heading}
                    </h3>
                    <p>{pack.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

CoachingPageTemplate.propTypes = {
  headingAndContent: PropTypes.array, // TODO array of whaat?
  packages: PropTypes.array,
  coverImage: PropTypes.object,
  contentComponent: PropTypes.func
};

const CoachingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout footerData={data.footerData} navbarData={data.navbarData}>
      <CoachingPageTemplate
        contentComponent={HTMLContent}
        headingAndContent={frontmatter.heading_and_content}
        packages={frontmatter.packages}
        coverImage={frontmatter.cover_image}
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
        cover_image {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading_and_content {
          heading
          content {
            paragraph
          }
        }
        packages {
          heading
          content
          image {
            childImageSharp {
              fluid(maxWidth: 1280, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
