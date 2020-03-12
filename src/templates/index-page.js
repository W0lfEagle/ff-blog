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
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`
      }}
    >
      <div className="container is-fluid">
        {/* is-6-tablet is-4-desktop is-offset-1-desktop */}
        <div className="columns">
          <div className="column">
            <h1
              className="is-size-1 is-size-2-mobile has-text-centered"
              style={{
                color: "white",
                lineHeight: "1.5"
                // marginBottom: "3rem",
                // fontWeight: "bolder"
              }}
            >
              {title}
            </h1>
            <h1 className="has-text-white is-size-2 is-size-3-mobile is-italic has-text-centered">
              <span>{heroTitle2}</span>
              {/* <br /> */}
            </h1>
            <h1 className="has-text-white is-size-2 is-size-3-mobile has-text-centered">
              {heroTitle3}
            </h1>

            <div
              class="buttons has-addons is-centered"
              style={{ marginTop: "2rem" }}
            >
              <a
                href="https://calendly.com/felicityforsyth/coaching"
                target="_blank"
              >
                <button className="has-text-weight-bold button is-medium is-primary">
                  Start your journey
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-6-tablet is-5-widescreen is-offset-1-widescreen">
            <div className="section">
              <div className="content">
                {/* <div className="tile"> */}
                <h1 className="title has-text-info is-size-2">
                  {mainpitch.title}
                  <br />
                  I'm Felicity.
                </h1>
                {/* <h1 className="title has-text-info">I'm Felicity</h1> */}
                {/* </div> */}
                {/* <div className="tile"> */}
                <h3 className="subtitle has-text-info">
                  {mainpitch.description}
                </h3>
                {/* </div> */}
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
              <div className="columns">
                <div className="column is-12 ">
                  <figure className="image">
                    <PreviewCompatibleImage imageInfo={{ image: image2 }} />
                  </figure>
                </div>
              </div>
              {/* <div className="section"> */}
              <div className="content">
                {/* <div className="tile"> */}
                <p className="is-size-4 has-text-primary is-family-secondary has-text-centered">
                  {salesPitch}
                </p>
                {/* </div> */}
              </div>
              <div
                class="buttons has-addons is-centered"
                // style={{ marginTop: "2rem" }}
              >
                <a
                  href="https://calendly.com/felicityforsyth/coaching"
                  target="_blank"
                >
                  <button className="button has-text-weight-bold is-medium is-primary">
                    Schedule a call
                  </button>
                </a>
              </div>
            </div>

            {/* TODO - Contact Card Component */}
            {/* <div className="card contact-card">
              <div className="card-content has-text-centered">
                <h2 className="is-size-4 has-text-centered has-text-primary">
                  Start your journey with a free coaching session.
                </h2>
              </div>
              <div className="card-content">
              </div>
            </div> */}
            {/* ------ */}
          </div>
        </div>
      </div>
    </div>

    {/* QUOTE 1 */}
    <section className="hero is-danger is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="is-size-2">"{quote1.quote}"</h1>
          <h2 className="is-italic is-size-3">- {quote1.by}</h2>
        </div>
      </div>
    </section>
    {/* ------ */}

    {/* KIND WORDS SECTION */}
    <section className="section is-medium">
      <div className="container">
        <h1 className="title has-text-info has-text-centered">Kind Words...</h1>
        <div className="section">
          <div className="columns is-multiline">
            {testimonials.map(t => (
              <div className="column is-6">
                <div className="card">
                  <div class="card-content">
                    <p className="has-text-justified">“{t.quote}”</p>
                    <p class="subtitle is-italic">- {t.by}</p>
                  </div>
                </div>
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
          <h1 className="is-size-2">"{quote2.quote}"</h1>
          <h2 className="is-italic is-size-3">- {quote2.by}</h2>
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
