import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <AboutPageTemplate
        title1={data.title1}
        title2={data.title2}
        content={widgetFor("body")}
        image1={data.image1}
        image2={data.image2}
        myJourney={data.myJourney}
      />
    );
  }
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AboutPagePreview;
