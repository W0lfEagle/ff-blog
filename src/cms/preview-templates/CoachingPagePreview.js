import React from "react";
import PropTypes from "prop-types";
import { CoachingPageTemplate } from "../../templates/coaching-page";

const CoachingPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  return (
    <CoachingPageTemplate
      headingAndContent={data.heading_and_content}
      packages={data.packages}
      coverImage={data.cover_image}
      quote1={data.quote1}
      detailsHeading={data.details_heading}
      detailsDescription={data.details_description}
    />
  );
};

CoachingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default CoachingPagePreview;
