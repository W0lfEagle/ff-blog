import React from "react";
import PropTypes from "prop-types";
import { CoachingPageTemplate } from "../../templates/coaching-page";

const CoachingPagePreview = ({ entry }) => {
  const entryHc = entry.getIn(["data", "heading_and_content"]);
  const hc = entryHc ? entryHc.toJs() : [];
  return <CoachingPageTemplate headingAndContent={hc} />;
};

CoachingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default CoachingPagePreview;
