import React from "react";
import ContentLoader from "react-content-loader";

const ProductLoader: React.FC = () => {
  return (
    <ContentLoader
      width={300}
      height={470}
      className="p-[1.875rem] border-y-[0.125rem] ssm:border-[0.125rem] ssm:rounded-[1.5625rem]"
    >
      <circle cx="118" cy="118" r="108" />

      <rect x="45" y="254" width="150" height="18" rx="6" ry="6" />

      <rect x="70" y="294" width="100" height="12" rx="6" ry="6" />
      <rect x="20" y="314" width="200" height="12" rx="6" ry="6" />
      <rect x="80" y="334" width="80" height="12" rx="6" ry="6" />

      <rect x="20" y="380" width="50" height="12" rx="6" ry="6" />
      <rect x="90" y="380" width="50" height="12" rx="6" ry="6" />
      <rect x="160" y="374" width="50" height="24" rx="6" ry="6" />
    </ContentLoader>
  );
};

export default ProductLoader;
