import React from "react";
import PropTypes from "prop-types";
import { CoachingPageTemplate } from "../../templates/coaching-page";

const CoachingPagePreview = ({ entry }) => {
  const entryHc = entry.getIn(["data", "heading_and_content"]);
  const hc = entryHc ? entryHc.toJS() : [];

  const entryPackages = entry.getIn(["data", "packages"]);
  const packages = entryPackages ? entryPackages.toJS() : [];

  const coverImage = entry.getIn(["data", "cover_image"]);

  return (
    <CoachingPageTemplate
      headingAndContent={hc}
      packages={packages}
      coverImage={coverImage}
    />
  );
};

CoachingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default CoachingPagePreview;
