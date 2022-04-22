import React from "react";
import ContentLoader from "react-content-loader";

const CategoryLoader: React.FC = () => {
  return (
    <ContentLoader width={100} height={38}>
      <rect x="0" width="100" height="38" rx="18" ry="18" />
    </ContentLoader>
  );
};

export default CategoryLoader;
