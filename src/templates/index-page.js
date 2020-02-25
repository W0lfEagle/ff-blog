import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const IndexPageTemplate = ({
  image,
  title,
  heroTitle2,
  heroTitle3,
  mainpitch,
  image2,
  pageContent,
  salesPitch,
  quote1,
  testimonials,
  quote2
}) => (
  <div>
    <div
      className="full-width-image margin-top-0 is-relative"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`
      }}
    >
      <div
        className="container is-fluid"
        style={{
          position: "absolute",
          top: "13.5rem"
        }}
      >
        {/* is-6-tablet is-4-desktop is-offset-1-desktop */}
        <div className="columns">
          <div className="column">
            <h1
              className="has-text-weight-bold is-size-1 has-text-centered"
              style={{
                color: "white",
                lineHeight: "1.5",
                // marginBottom: "3rem",
                fontWeight: "bolder"
              }}
            >
              {title}
            </h1>
            <h1 className="has-text-weight-bold has-text-white is-size-2 is-italic has-text-centered">
              <span>{heroTitle2}</span>
              {/* <br /> */}
            </h1>
            <h1 className="has-text-weight-bold has-text-white is-size-2 has-text-centered">
              {heroTitle3}
            </h1>
          </div>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="container is-fluid">
        <div className="columns">
          <div className="column is-6-tablet is-5-widescreen is-offset-1-widescreen">
            <div className="section">
              <div className="content">
                <div className="tile">
                  <h1 className="title has-text-info">{mainpitch.title}</h1>
                </div>
                <div className="tile">
                  <h3 className="subtitle is-italic has-text-info">
                    {mainpitch.description}
                  </h3>
                </div>
              </div>
              <div className="content">
                {pageContent.map(content => (
                  <p key={content.paragraph} className="has-text-justified">
                    {content.paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="column is-6-tablet is-5-widescreen">
            <div className="section">
              <div className="content">
                <div className="tile">
                  <h2 className="title has-text-primary has-text-centered">
                    {salesPitch}
                  </h2>
                </div>
              </div>
            </div>

            {/* TODO - Contact Card Component */}
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
            {/* ------ */}
            <figure className="is-square">
              <PreviewCompatibleImage imageInfo={{ image: image2 }} />
            </figure>
          </div>
        </div>
      </div>
    </section>

    {/* QUOTE 1 */}
    <section className="hero is-danger is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">{quote1.quote}</h1>
          <h2 className="subtitle is-italic">- {quote1.by}</h2>
        </div>
      </div>
    </section>
    {/* ------ */}

    {/* KIND WORDS SECTION */}
    <section className="section is-medium">
      <div className="container">
        <div className="heading">
          <h1 className="title has-text-info has-text-centered">
            Kind Words...
          </h1>
        </div>
        <div className="section">
          <div className="columns">
            {testimonials.map(t => (
              <div className="column">
                <p>
                  “{t.quote}” - {t.by}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    {/* ------ */}

    <section className="hero is-primary is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">{quote2.quote}</h1>
          <h2 className="subtitle is-italic">- {quote2.by}</h2>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  heroTitle2: PropTypes.string,
  heroTitle3: PropTypes.string,
  pageContent: PropTypes.arrayOf(
    PropTypes.shape({
      paragraph: PropTypes.string
    })
  ),
  mainpitch: PropTypes.object,
  salesPitch: PropTypes.string,
  image2: PropTypes.object,
  quote1: PropTypes.shape({
    quote: PropTypes.string,
    by: PropTypes.string
  }),
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      by: PropTypes.string
    })
  ),
  quote2: PropTypes.shape({
    quote: PropTypes.string,
    by: PropTypes.string
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout footerData={data.footerData} navbarData={data.navbarData}>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heroTitle2={frontmatter.heroTitle2}
        heroTitle3={frontmatter.heroTitle3}
        mainpitch={frontmatter.mainpitch}
        image2={frontmatter.image2}
        pageContent={frontmatter.pageContent}
        salesPitch={frontmatter.salesPitch}
        quote1={frontmatter.quote1}
        testimonials={frontmatter.testimonials}
        quote2={frontmatter.quote2}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    ...LayoutFragment
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heroTitle2
        heroTitle3
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainpitch {
          title
          description
        }
        image2 {
          childImageSharp {
            fluid(maxWidth: 480, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pageContent {
          paragraph
        }
        salesPitch
        quote1 {
          quote
          by
        }
        testimonials {
          quote
          by
        }
        quote2 {
          quote
          by
        }
      }
    }
  }
`;
