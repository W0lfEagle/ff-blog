import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const AboutPageTemplate = ({
  title1,
  title2,
  content,
  image1,
  // image2,
  quote1,
  myJourney,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-info">
                  {title1}
                  <br />
                  {title2}
                </h2>
                <PageContent
                  className="content has-text-justified"
                  content={content}
                />
                <h3 className="signature">xo Felicity</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Banner */}
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image1.childImageSharp ? image1.childImageSharp.fluid.src : image1
          })`,
          maxHeight: "400px"
        }}
      ></div>
      {/* ------ */}

      <div className="section">
        <div className="container">
          <h1 className="title is-size-3 has-text-weight-bold is-bold-light has-text-info">
            {/* {title} */}
            {myJourney.heading}
          </h1>
          <div className="columns">
            <div className="column is-6">
              <div className="section">
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
            <div className="column is-6">
              {/* <div className="section">
                <figure className="is-square">
                  <PreviewCompatibleImage imageInfo={{ image: image1 }} />
                </figure>
              </div> */}
              <div className="section">
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
        </div>
      </div>

      {/* QUOTE 1 */}
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">"{quote1.quote}"</h1>
            <h2 className="subtitle is-italic">- {quote1.by}</h2>
          </div>
        </div>
      </section>
      {/* ------ */}
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
  image1: PropTypes.object,
  // image2: PropTypes.object,
  contentComponent: PropTypes.func,
  quote1: PropTypes.shape({
    quote: PropTypes.string,
    by: PropTypes.string
  })
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
        image1={post.frontmatter.image1}
        // image2={post.frontmatter.image2}
        myJourney={post.frontmatter.myJourney}
        quote1={post.frontmatter.quote1}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage {
    ...LayoutFragment
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
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
        image1 {
          childImageSharp {
            fluid(maxWidth: 2400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        # image2 {
        #   childImageSharp {
        #     fluid(maxWidth: 480, quality: 100) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
        quote1 {
          quote
          by
        }
      }
    }
  }
`;
