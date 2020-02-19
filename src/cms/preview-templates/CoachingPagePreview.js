import React from "react";
import PropTypes from "prop-types";
import { CoachingPageTemplate } from "../../templates/coaching-page";

const CoachingPagePreview = ({ entry, widgetFor }) => (
  <CoachingPageTemplate
    title1={entry.getIn(["data", "title1"])}
    content1={widgetFor("body1")}
    title2={entry.getIn(["data", "title2"])}
    content2={widgetFor("body2")}
    title3={entry.getIn(["data", "title3"])}
    content3={widgetFor("body3")}
  />
);

CoachingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default CoachingPagePreview;
