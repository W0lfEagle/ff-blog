import React from "react";
import PropTypes from "prop-types";
import { KindWordsPageTemplate } from "../../templates/kind-words-page";

const KindWordsPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <KindWordsPageTemplate
        heading={data.heading}
        image={data.image}
        quote1={data.quote1}
        testimonials={data.testimonials}
      />
    );
  }
};

KindWordsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default KindWordsPagePreview;
