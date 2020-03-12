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
  contentComponent,
  quote1,
  detailsHeading,
  detailsDescription
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
                      <p className="has-text-justified" key={c.paragraph}>
                        {c.paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="column is-6">
              <div className="section">
                <figure className="image">
                  <PreviewCompatibleImage imageInfo={{ image: coverImage }} />
                </figure>
              </div>
              <div className="column is-10 is-offset-1">
                <div className="card contact-card">
                  <div className="card-content has-text-centered">
                    <h2 className="is-size-4 has-text-centered">
                      Start your journey with a{" "}
                      <span className="has-text-weight-bold">free</span>{" "}
                      coaching session.
                    </h2>
                    {/* </div>
                    <div className="card-content"> */}
                    <a
                      href="https://calendly.com/felicityforsyth/coaching"
                      target="_blank"
                    >
                      <button
                        className="button has-text-weight-bold is-medium is-fullwidth is-primary"
                        style={{ marginTop: "1rem" }}
                      >
                        Schedule a call
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QUOTE 1 */}
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="is-size-3">"{quote1.quote}"</h1>
            <h2 className="is-size-4 is-italic">- {quote1.by}</h2>
          </div>
        </div>
      </section>
      {/* ------ */}

      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <h2 className="title is-size-3 has-text-weight-bold has-text-info has-text-centered">
                {detailsHeading}
              </h2>
              <p style={{ marginBottom: "2rem" }}>{detailsDescription}</p>
              {packages.map(pack => (
                <div className="columns is-mobile" key={pack.heading}>
                  <div className="column is-2">
                    <figure className="image is-48x48">
                      <PreviewCompatibleImage
                        imageInfo={{ image: pack.image }}
                        style={{ maxWidth: "50px", maxHeight: "50px" }}
                      />
                    </figure>
                  </div>
                  <div className="column is-10">
                    <div className="content">
                      <h3 className="has-text-danger is-size-5">
                        {pack.heading}
                      </h3>
                      <p className="has-text-justified">{pack.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CoachingPageTemplate.propTypes = {
  headingAndContent: PropTypes.array, // TODO array of whaat?
  detailsHeading: PropTypes.string,
  detailsDescription: PropTypes.string,
  packages: PropTypes.array,
  coverImage: PropTypes.object,
  contentComponent: PropTypes.func,
  quote1: PropTypes.shape({
    quote: PropTypes.string,
    by: PropTypes.string
  })
};

const CoachingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout footerData={data.footerData} navbarData={data.navbarData}>
      <CoachingPageTemplate
        contentComponent={HTMLContent}
        headingAndContent={frontmatter.heading_and_content}
        packages={frontmatter.packages}
        detailsHeading={frontmatter.details_heading}
        detailsDescription={frontmatter.details_description}
        coverImage={frontmatter.cover_image}
        quote1={frontmatter.quote1}
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
        details_heading
        details_description
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
        quote1 {
          quote
          by
        }
      }
    }
  }
`;
