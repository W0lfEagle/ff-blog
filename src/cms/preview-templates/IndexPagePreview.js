import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        title={data.title}
        heroTitle2={data.heroTitle2}
        heroTitle3={data.heroTitle3}
        mainpitch={data.mainpitch || {}}
        pageContent={data.pageContent}
        salesPitch={data.salesPitch}
        quote1={data.quote1}
        testimonials={data.testimonials}
        quote2={data.quote2}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default IndexPagePreview;
