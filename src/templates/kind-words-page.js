import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const KindWordsPageTemplate = ({
  heading,
  image,
  quote1,
  testimonials
}) => {
  return (
    <div>
      {/* Image Banner */}
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          maxHeight: "400px"
        }}
      ></div>
      {/* ------ */}

      <div className="section">
        <div className="container">
          <div className="container">
            <h1 className="title has-text-info has-text-centered">{heading}</h1>
            <div className="section">
              <div className="columns is-multiline">
                {testimonials.map(t => (
                  <div className="column is-6">
                    <div className="card">
                      <div class="card-content">
                        <p>“{t.quote}”</p>
                        <p class="subtitle is-italic">- {t.by}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QUOTE 1 */}
      <section className="hero is-danger">
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

KindWordsPageTemplate.propTypes = {
  heading: PropTypes.string,
  image: PropTypes.object,
  quote1: PropTypes.shape({
    quote: PropTypes.string,
    by: PropTypes.string
  }),
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      by: PropTypes.string
    })
  )
};

const KindWordsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout footerData={data.footerData} navbarData={data.navbarData}>
      <KindWordsPageTemplate
        heading={post.frontmatter.heading}
        image={post.frontmatter.image}
        quote1={post.frontmatter.quote1}
        testimonials={post.frontmatter.testimonials}
      />
    </Layout>
  );
};

KindWordsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default KindWordsPage;

export const kindWordsPageQuery = graphql`
  query KindWordsPage {
    ...LayoutFragment
    markdownRemark(frontmatter: { templateKey: { eq: "kind-words-page" } }) {
      html
      frontmatter {
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 2400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        quote1 {
          quote
          by
        }
        testimonials {
          quote
          by
        }
      }
    }
  }
`;
