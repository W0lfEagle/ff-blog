import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    {/* <section class="hero is-info is-large">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Large title</h1>
          <h2 class="subtitle">Large subtitle</h2>
        </div>
      </div>
    </section> */}
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`
      }}
    >
      <div className="container is-fluid">
        <div className="columns">
          {/* <div className="level-left"> */}
          <div className="column is-4 is-offset-1">
            <h1
              className="has-text-weight-bold is-size-3 has-text-centered"
              style={{
                color: "white",
                lineHeight: "1.5",
                padding: "0.25em"
              }}
            >
              {title}
            </h1>
            <h1
              className="has-text-weight-bold is-size-4 is-italic has-text-centered"
              style={{
                color: "white",
                lineHeight: "1.4",
                padding: "0.25em"
              }}
            >
              {subheading}
            </h1>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
    <section className="section">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-6">
              <div className="content">
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
                {/* <p className="has-text-justified">{description}</p> */}
                <p className="has-text-justified">
                  Through one-to-one coaching packages delivered online or
                  face-to-face in east London, my goal is to help clients
                  mindfully navigate change or intentionally create change in
                  their lives.
                </p>
                <p className="has-text-justified">
                  My work is steeped in a gentle sense of compassionate enquiry,
                  kind curiosity, empathy and humor.{" "}
                </p>
                <p className="has-text-justified">
                  With an ICF accredited diploma in Transformational Coaching, I
                  take a holistic, integrative approach to coaching, as a method
                  to explore your inner landscape and create space for you to
                  more fully understand yourself.
                </p>
                <p className="has-text-justified">
                  Drop me a line if this sounds like you. Our first call is free
                  and a wonderful place to get a taste for coaching without any
                  commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-danger is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            To exist is to change, to change is to mature, to mature is to go on
            creating oneself endlessly.
          </h1>
          <h2 class="subtitle is-italic">- Henri Bergson</h2>
        </div>
      </div>
    </section>
    <section class="section is-medium">
      <div class="container">
        <div class="heading">
          <h1 class="title has-text-info has-text-centered">Kind Words...</h1>
        </div>
        <div className="section">
          <div class="columns">
            <div class="column">
              <p>
                “I would like to send you a huge heartfelt thank you for your
                wonderful course. I started my blog only a few months before the
                course began so I was a complete novice and not feeling all that
                confident. All the ideas and prompts and encouragement for
                revealing our true selves in a voice authentic to us, plus the
                wonderful community of creative women, have made this not only a
                truly memorable and rich experience, but also a very practically
                useful one for establishing our own unique web presence. Thank
                you for so generously sharing yourself with us!” - Leah
              </p>
            </div>
            <div class="column">
              <p>
                “Blogging from the Heart turned out to be one of my favorite
                e-courses. Thank you so much for putting it together! You’ve
                inspired me to finally take the plunge and make my blog into the
                space I’ve always dreamed of. Your design tips and writing
                prompts have helped me get through days where inspiration
                wouldn’t flow freely and inspired me to reveal a little more of
                myself in my writing. With your guidance my blog has finally
                become a place for community. I couldn’t have asked for more!
                I’m looking forward to the pdf and will definitely be suggesting
                this class to any blogger I know who wants to take things to the
                next level. I can’t believe it all went by so quickly!” - Johnny
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            And you, when will you begin that long journey into yourself?
          </h1>
          <h2 class="subtitle is-italic">- Rumi</h2>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout footerData={data.footerData} navbarData={data.navbarData}>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
